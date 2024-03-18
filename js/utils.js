const { createClient } = supabase
const supabaseUrl = 'https://nybfveonvoukxobyaujg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55YmZ2ZW9udm91a3hvYnlhdWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNTMxMzksImV4cCI6MjAyNTkyOTEzOX0.pK3fAg847jPUFtNJDBCy5jbVYzWkzN6FLlfgN8kM-uI'
const _supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await _supabase
    .from('books')
    .select('*')

    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.ISBN}</td>
        `;
    }
}

getBooks();

