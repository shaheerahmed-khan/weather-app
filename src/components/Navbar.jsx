import logoIcon from "/assets/images/logo.svg";
import UnitDropdown from "/src/components/UnitDropdown.jsx";

export default function Navbar({ weatherConfig, onSelectUnit }) {
  return (
    <nav className="flex gap-3 flex-row items-center justify-between text-sm text-white p-3 sm:p-4">
      <img src={logoIcon} className="h-8 w-auto" alt="Logo" />

      <UnitDropdown weatherConfig={weatherConfig} onSelectUnit={onSelectUnit} />
    </nav>
  );
}
