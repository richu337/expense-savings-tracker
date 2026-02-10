-- Expense & Savings Tracker Database Schema
-- Run this in your Supabase SQL Editor

-- Create expenses table
CREATE TABLE expenses (
    id BIGSERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    category TEXT NOT NULL,
    date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create savings table (simplified - just track savings amounts)
CREATE TABLE savings (
    id BIGSERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE savings ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (for demo purposes)
-- WARNING: In production, implement proper authentication and user-specific policies
CREATE POLICY "Enable all access for expenses" ON expenses
    FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Enable all access for savings" ON savings
    FOR ALL USING (true) WITH CHECK (true);

-- Optional: Create indexes for better performance
CREATE INDEX idx_expenses_date ON expenses(date DESC);
CREATE INDEX idx_expenses_category ON expenses(category);
CREATE INDEX idx_savings_date ON savings(date DESC);

-- Optional: Add comments for documentation
COMMENT ON TABLE expenses IS 'Stores user expense records';
COMMENT ON TABLE savings IS 'Stores user savings entries';
COMMENT ON COLUMN expenses.description IS 'Description of the expense';
COMMENT ON COLUMN expenses.amount IS 'Amount spent';
COMMENT ON COLUMN expenses.category IS 'Category of expense (Food, Transport, etc.)';
COMMENT ON COLUMN savings.description IS 'Description of the savings entry';
COMMENT ON COLUMN savings.amount IS 'Amount saved';