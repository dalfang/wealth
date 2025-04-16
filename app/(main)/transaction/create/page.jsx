"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createTransaction } from "@/actions/transaction";

export default function CreateTransactionPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      await createTransaction({
        amount: parseFloat(formData.get("amount")),
        description: formData.get("description"),
        type: formData.get("type"),
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating transaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Transaction</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            required
            placeholder="0.00"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            type="text"
            required
            placeholder="Enter description"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="type">Type</Label>
          <select
            id="type"
            name="type"
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="EXPENSE">Expense</option>
            <option value="INCOME">Income</option>
          </select>
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Transaction"}
        </Button>
      </form>
    </div>
  );
}
