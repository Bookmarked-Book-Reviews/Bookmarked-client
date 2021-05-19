import React from 'react'
import AddBookForm from '../../Components/AddBookForm/AddBookForm';
import DashboardAppBar from '../../Components/DashboardAppBar/DashboardAppBar';

function AddBook() {
    return (
        <div>
              <DashboardAppBar/>
              <main>
                  <AddBookForm/>
              </main>
        </div>
    )
}

export default AddBook
