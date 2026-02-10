// Set today's date as default
document.getElementById('expenseDate').valueAsDate = new Date();
document.getElementById('savingsDate').valueAsDate = new Date();

// Tab switching
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName + 'Tab').classList.add('active');
    event.target.classList.add('active');
}

// Load data on page load
document.addEventListener('DOMContentLoaded', () => {
    loadExpenses();
    loadSavings();
    updateDashboard();
});

// Expense Form Submit
document.getElementById('expenseForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const expense = {
        description: document.getElementById('expenseDescription').value,
        amount: parseFloat(document.getElementById('expenseAmount').value),
        category: document.getElementById('expenseCategory').value,
        date: document.getElementById('expenseDate').value,
        created_at: new Date().toISOString()
    };
    
    const { data, error } = await supabaseClient
        .from('expenses')
        .insert([expense]);
    
    if (error) {
        console.error('Error adding expense:', error);
        alert('Error adding expense. Please try again.');
    } else {
        alert('Expense added successfully!');
        e.target.reset();
        document.getElementById('expenseDate').valueAsDate = new Date();
        loadExpenses();
        updateDashboard();
    }
});

// Savings Form Submit
document.getElementById('savingsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const savings = {
        description: document.getElementById('savingsDescription').value,
        amount: parseFloat(document.getElementById('savingsAmount').value),
        date: document.getElementById('savingsDate').value,
        created_at: new Date().toISOString()
    };
    
    const { data, error } = await supabaseClient
        .from('savings')
        .insert([savings]);
    
    if (error) {
        console.error('Error adding savings:', error);
        alert('Error adding savings. Please try again.');
    } else {
        alert('Savings added successfully!');
        e.target.reset();
        document.getElementById('savingsDate').valueAsDate = new Date();
        loadSavings();
        updateDashboard();
    }
});

// Load Expenses
async function loadExpenses() {
    const { data, error } = await supabaseClient
        .from('expenses')
        .select('*')
        .order('date', { ascending: false });
    
    if (error) {
        console.error('Error loading expenses:', error);
        return;
    }
    
    const expensesList = document.getElementById('expensesList');
    
    if (data.length === 0) {
        expensesList.innerHTML = '<div class="empty-state"><p>No expenses yet. Add your first expense!</p></div>';
        return;
    }
    
    expensesList.innerHTML = data.map(expense => `
        <div class="item">
            <div class="item-info">
                <h4>${expense.category} - ${expense.description}</h4>
                <p>${new Date(expense.date).toLocaleDateString()}</p>
            </div>
            <div class="item-amount">₹${expense.amount.toFixed(2)}</div>
            <div class="item-actions">
                <button class="btn btn-danger" onclick="deleteExpense(${expense.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Load Savings
async function loadSavings() {
    const { data, error } = await supabaseClient
        .from('savings')
        .select('*')
        .order('date', { ascending: false });
    
    if (error) {
        console.error('Error loading savings:', error);
        return;
    }
    
    const savingsList = document.getElementById('savingsList');
    
    if (data.length === 0) {
        savingsList.innerHTML = '<div class="empty-state"><p>No savings yet. Add your first savings entry!</p></div>';
        return;
    }
    
    savingsList.innerHTML = data.map(saving => `
        <div class="item">
            <div class="item-info">
                <h4>${saving.description}</h4>
                <p>${new Date(saving.date).toLocaleDateString()}</p>
            </div>
            <div class="item-amount savings-amount">₹${saving.amount.toFixed(2)}</div>
            <div class="item-actions">
                <button class="btn btn-danger" onclick="deleteSavings(${saving.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Update Dashboard
async function updateDashboard() {
    // Get total expenses
    const { data: expenses } = await supabaseClient
        .from('expenses')
        .select('amount');
    
    const totalExpenses = expenses?.reduce((sum, exp) => sum + exp.amount, 0) || 0;
    
    // Get total savings
    const { data: savings } = await supabaseClient
        .from('savings')
        .select('amount');
    
    const totalSavings = savings?.reduce((sum, sav) => sum + sav.amount, 0) || 0;
    
    // Calculate remaining balance: Savings - Expenses (minimum 0)
    const calculatedBalance = totalSavings - totalExpenses;
    const netBalance = calculatedBalance < 0 ? 0 : calculatedBalance;
    
    // Update dashboard
    document.getElementById('totalSavings').textContent = `₹${totalSavings.toFixed(2)}`;
    document.getElementById('totalExpenses').textContent = `₹${totalExpenses.toFixed(2)}`;
    document.getElementById('netBalance').textContent = `₹${netBalance.toFixed(2)}`;
}

// Delete Expense
async function deleteExpense(id) {
    if (!confirm('Are you sure you want to delete this expense?')) return;
    
    const { error } = await supabaseClient
        .from('expenses')
        .delete()
        .eq('id', id);
    
    if (error) {
        console.error('Error deleting expense:', error);
        alert('Error deleting expense. Please try again.');
    } else {
        loadExpenses();
        updateDashboard();
    }
}

// Delete Savings
async function deleteSavings(id) {
    if (!confirm('Are you sure you want to delete this savings entry?')) return;
    
    const { error } = await supabaseClient
        .from('savings')
        .delete()
        .eq('id', id);
    
    if (error) {
        console.error('Error deleting savings:', error);
        alert('Error deleting savings. Please try again.');
    } else {
        loadSavings();
        updateDashboard();
    }
}