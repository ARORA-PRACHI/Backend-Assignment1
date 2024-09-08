// import React from 'react';
// import './App.css';
// import logo from './logo.png';  // Make sure to import your logo image

// function App() {
//   return (
//     <div className="App">
//       {/* Navbar with logo */}
//       <nav>
//         <ul className="navbar">
//           <li className="navbar-left">
//             <img src={logo} alt="Logo" className="logo" />
//           </li>
//           <li className="navbar-right">
//             <a href="#home">Home</a>
//             <a href="#login">Login</a>
//             <a href="#about">About</a>
//             <a href="#feedback">Feedback</a>
//           </li>
//         </ul>
//       </nav>

//       <div className="container">
//         <aside className="sidebar-left">
//           <p>Left Sidebar</p>
//         </aside>
        
//         <main>
//           <p>Main Content Area</p>
//         </main>
        
//         <aside className="sidebar-right">
//           <p>Right Sidebar</p>
//         </aside>
//       </div>
      
//       <footer>
//         <p>Footer</p>
//       </footer>
//     </div>
//   );
// }
// export default App;

// import React from 'react';

// const App = () => {
//   return (
//     <div style={styles.container}>
      
//       {/* Header Section */}
//       <header style={styles.header}>
//         <div>Our Story</div>
//         <div>Membership</div>
//         <button style={styles.writeButton}>Write</button>
//       </header>

//       <div style={styles.body}>
        
//         {/* Left Sidebar */}
//         <aside style={styles.leftSidebar}>
//           <button style={styles.sidebarButton}>Home</button>
//           <button style={styles.sidebarButton}>Explore</button>
//           <button style={styles.sidebarButton}>Notification</button>
//           <button style={styles.sidebarButton}>Profile</button>
//         </aside>

//         {/* Main Content Section */}
//         <main style={styles.mainContent}>
//           <h2>Blogs</h2>
//           <div style={styles.blogPost}>
//             <h3>John Doe</h3>
//             <p>This is the content of John's blog post...</p>
//           </div>
//           <div style={styles.blogPost}>
//             <h3>Jane Smith</h3>
//             <p>This is the content of Jane's blog post...</p>
//           </div>
//           <div style={styles.blogPost}>
//             <h3>Mary Johnson</h3>
//             <p>This is the content of Mary's blog post...</p>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={styles.rightSidebar}>
//           <h3>People to Follow</h3>
//           <ul>
//             <li>David Warner</li>
//             <li>Sarah Connor</li>
//             <li>Elon Musk</li>
//           </ul>
//         </aside>
//       </div>
//     </div>
//   );
// };

// // Inline CSS styles
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100vh',
//     fontFamily: 'Arial, sans-serif',
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#007bff',
//     color: 'white',
//     padding: '10px 20px',
//     fontSize: '18px',
//   },
//   writeButton: {
//     backgroundColor: '#ffffff',
//     color: '#007bff',
//     border: '1px solid #007bff',
//     padding: '5px 10px',
//     cursor: 'pointer',
//     borderRadius: '4px',
//   },
//   body: {
//     display: 'flex',
//     flex: 1,
//   },
//   leftSidebar: {
//     width: '20%',
//     backgroundColor: '#f1f1f1',
//     padding: '20px',
//   },
//   sidebarButton: {
//     display: 'block',
//     backgroundColor: '#007bff',
//     color: 'white',
//     padding: '10px',
//     marginBottom: '10px',
//     width: '100%',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   mainContent: {
//     width: '60%',
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//   },
//   blogPost: {
//     backgroundColor: 'white',
//     padding: '15px',
//     marginBottom: '20px',
//     borderRadius: '5px',
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//   },
//   rightSidebar: {
//     width: '20%',
//     backgroundColor: '#f1f1f1',
//     padding: '20px',
//   },
// };

// export default App;



import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      
      {/* Header Section */}
      <header style={styles.header}>
        <div>Our Story</div>
        <div>Membership</div>
        <button style={styles.writeButton}>Write</button>
      </header>

      <div style={styles.body}>
        
        {/* Left Sidebar */}
        <aside style={styles.leftSidebar}>
          <button style={styles.sidebarButton}>Home</button>
          <button style={styles.sidebarButton}>Explore</button>
          <button style={styles.sidebarButton}>Notification</button>
          <button style={styles.sidebarButton}>Profile</button>
        </aside>

        {/* Main Content Section */}
        <main style={styles.mainContent}>
          <h2>Blogs</h2>

          <div style={styles.blogPost}>
            <img
              src="https://via.placeholder.com/100"
              alt="John Doe"
              style={styles.blogImage}
            />
            <div>
              <h3>John Doe</h3>
              <p>This is the content of John's blog post about travel...</p>
            </div>
          </div>

          <div style={styles.blogPost}>
            <img
              src="https://via.placeholder.com/100"
              alt="Jane Smith"
              style={styles.blogImage}
            />
            <div>
              <h3>Jane Smith</h3>
              <p>Jane shares her thoughts on the best places to visit in Europe...</p>
            </div>
          </div>

          <div style={styles.blogPost}>
            <img
              src="https://via.placeholder.com/100"
              alt="Mary Johnson"
              style={styles.blogImage}
            />
            <div>
              <h3>Mary Johnson</h3>
              <p>Mary talks about her recent trip to the mountains...</p>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside style={styles.rightSidebar}>
          <h3>People to Follow</h3>
          <div style={styles.personToFollow}>
            <img
              src="https://via.placeholder.com/50"
              alt="David Warner"
              style={styles.personImage}
            />
            <span>David Warner</span>
          </div>
          <div style={styles.personToFollow}>
            <img
              src="https://via.placeholder.com/50"
              alt="Sarah Connor"
              style={styles.personImage}
            />
            <span>Sarah Connor</span>
          </div>
          <div style={styles.personToFollow}>
            <img
              src="https://via.placeholder.com/50"
              alt="Elon Musk"
              style={styles.personImage}
            />
            <span>Elon Musk</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Updated Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    fontSize: '18px',
    borderBottom: '4px solid #0056b3',
  },
  writeButton: {
    backgroundColor: '#ffffff',
    color: '#007bff',
    border: '1px solid #007bff',
    padding: '8px 15px',
    cursor: 'pointer',
    borderRadius: '20px',
    transition: 'background 0.3s ease',
  },
  body: {
    display: 'flex',
    flex: 1,
  },
  leftSidebar: {
    width: '20%',
    backgroundColor: '#f1f1f1',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  sidebarButton: {
    display: 'block',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    marginBottom: '10px',
    width: '100%',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  sidebarButtonHover: {
    backgroundColor: '#0056b3',
  },
  mainContent: {
    width: '60%',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  },
  blogPost: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  blogImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  rightSidebar: {
    width: '20%',
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  personToFollow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  personImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
};

export default App;