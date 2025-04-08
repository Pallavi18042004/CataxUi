import navbar from './components/navbar'; // 👈 lowercase import

function App() {
  return (
    <navbar /> // ❌ React thinks this is an unknown HTML tag, not a component
  );
}
