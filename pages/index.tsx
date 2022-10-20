import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import GlobalWrapper from 'wrappers/global-wrapper/global-wrapper';

export default function HomePage() {
  return (
    <GlobalWrapper>
      <Welcome />
      <ColorSchemeToggle />
    </GlobalWrapper>
  );
}
