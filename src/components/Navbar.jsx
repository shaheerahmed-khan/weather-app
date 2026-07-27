import UnitDropdown from "/src/components/UnitDropdown.jsx";

export default function Navbar() {
  return (
    <nav className="flex justify-between text-sm text-white p-4">
      <img src="/assets/images/logo.svg" className="h-8" alt="Logo" />

      <UnitDropdown />
    </nav>
  );
}
