import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
      </header>
      
      <div className="container">
        <aside className="sidebar-left">
          <p>Left Sidebar</p>
        </aside>
        
        <main>
          <p>Main Content Area</p>
        </main>
        
        <aside className="sidebar-right">
          <p>Right Sidebar</p>
        </aside>
      </div>
      
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
