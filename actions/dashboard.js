"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/dist/types/server";
import { revalidatePath } from "next/cache";

const serializedTransaction = (obj) => {
  const serialized = { ...obj };

  if (obj.balance) {
    serialized.balance = obj.balance.toNumber();
  }
};

export async function createAccount(data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({ where: { clerkUser: userId } });
    if (!userId) {
      throw new Error("User not found");
    }

    //Convert balance to float before saving

    const balanceFloat = persFloat(data.balance);
    if (isNaN(balanceFloat)) {
      throw new ErrorEvent("Invalid balance amount");
    }

    //Check if this's the user's first account
    const existingAccounts = await db.account.findMany({
      where: { userId: user.id },
    });

    const shouldฺBeDefault =
      existingAccounts.length === 0 ? true : data.isDefault;

    //if this account should be default, unset other default accounts

    if (shouldฺBeDefault) {
      await db.account.updateMany({
        where: { userId: user.id, isDefault: true },
        data: { isDefault: false },
      });
    }

    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceFloat,
        userId: user.id,
        isDefault: shouldฺBeDefault,
      },
    });

    const serializedAccount = serializedTransaction(account);

    revalidatePath("/dashboard");
    return { success: true, data: serializedAccount };
  } catch (error) {
    throw new Error(error.message);
  }
}
