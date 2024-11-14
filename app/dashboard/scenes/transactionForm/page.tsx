"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { base_url } from "../../../../env.js"

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormItem,
    FormField,
    FormMessage,
    FormLabel,
} from '@/components/ui/form';
import { Select } from '../../components/select';
import axios from 'axios';
import { useAuth } from '../../provider/auth-provider';

// Define validation schema for form fields
const formSchema = z.object({
    transaction_type: z.enum(['Income', 'Expense']),
    category: z.string().nullable().refine(val => val !== null, "Category is required"),
    amount: z.number().positive("Amount must be positive").min(0.01, "Minimum amount is 0.01"),
    description: z.string().optional(),
    account_number: z.string().nonempty("Account number is required"),
});

const INCOME_CATEGORIES = [
    { value: 'salary', label: 'Salary' },
    { value: 'investments', label: 'Investments' }
];

const EXPENSE_CATEGORIES = [
    { value: 'bills', label: 'Bills' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'utilities', label: 'Utilities' }
];

const transactionCategoryOptions = [
    { label: "Income", value: 'Income' },
    { label: "Expense", value: 'Expense' }
];

const accountOptions = [
    { label: 'Checking Account', value: 'checking' },
    { label: 'Savings Account', value: 'savings' },
    { label: 'Credit Card', value: 'credit' },
];

const TransactionForm = ({ onSubmit, disabled }) => {
    const { getToken } = useAuth();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            transaction_type: "Income",
            category: null
        },
    });

    const [categoryOptions, setCategoryOptions] = useState(INCOME_CATEGORIES);

    // Update category options based on selected transaction type
    useEffect(() => {
        const transactionType = form.watch("transaction_type");
        setCategoryOptions(transactionType === 'Income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES);
        form.setValue("category", null); // Reset category whenever transaction type changes
    }, [form.watch("transaction_type")]);

    // Handle form submission
    const handleFormSubmit = async (data) => {
        try {
            // Concatenate transaction details into a single string
            const transactionString = `${data.transaction_type} ${data.category} ${data.amount} ${data.description || ''}`;

            // Generate a dummy embedding array
            const embeddingArray = Array(1536).fill(Math.random()); // Replace this with actual embeddings if available

            // Prepare data for submission
            const formattedData = {
                account_number: data.account_number.toString(),
                amount: parseFloat(data.amount),
                transaction_type: data.transaction_type.toLowerCase(),
                category: data.category.toLowerCase(),
                description: data.description || '',
                transaction_string: transactionString,
                embeddings: embeddingArray,
            };

            console.log("Transaction Data with Embedding:", formattedData);

            // Send data to your API
            const response = await axios.post('/api/test/', {
                content: formattedData,
                embeddings: Array(1536).fill(Math.random()),  // Dummy embedding array
            });
            console.log("Transaction saved with embedding:", response.data);
            onSubmit(formattedData);
        } catch (error) {
            console.error("Error saving transaction:", error);
        }
    };

    return (
        <Form {...form}>
            <form className="space-y-4 text-gray-800 pt-4" onSubmit={form.handleSubmit(handleFormSubmit)}>

                {/* Transaction Type Field */}
                <FormField name="transaction_type" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Transaction Type</FormLabel>
                        <FormControl>
                            <Select 
                                placeholder="Select Income or Expense"
                                options={transactionCategoryOptions}
                                value={field.value}
                                onChange={(value) => {
                                    field.onChange(value);
                                }}
                                disabled={disabled}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>

                {/* Category Field */}
                <FormField name="category" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                            <Select 
                                placeholder="Select a Category"
                                options={categoryOptions}
                                value={field.value}
                                onChange={field.onChange}
                                disabled={disabled}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                {/* Amount Field */}
                <FormField name="amount" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                            <Input
                                step="0.01"
                                disabled={disabled}
                                placeholder="e.g., 1000"
                                {...field}
                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                {/* Description Field */}
                <FormField name="description" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Input
                                disabled={disabled}
                                placeholder="Optional description"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                {/* Account Number Field */}
                <FormField name="account_number" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Account Number</FormLabel>
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Enter Account Number"
                                disabled={disabled}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                {/* Submit Button */}
                <Button 
                    type="submit" 
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={disabled}>
                    Submit Transaction
                </Button>

            </form>
        </Form>
    );
};

export default TransactionForm;
