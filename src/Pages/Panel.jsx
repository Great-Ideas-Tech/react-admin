import React from 'react';
import NavPillsHorizontal from '../Components/PanelComponents/NavPillsHorizontal';
import NavPillsVertical from '../Components/PanelComponents/NavPillsVertical';
import NavPillsWithoutBorderHorizontal from '../Components/PanelComponents/NavPillsWithoutBorderHorizontal';
import NavPillsWithoutBorderVertical from '../Components/PanelComponents/NavPillsWithoutBorderVertical';
import NavPillsWithIconHorizontal from '../Components/PanelComponents/NavPillsWithIconHorizontal';
import NavPillsWithIconVertical from '../Components/PanelComponents/NavPillsWithIconVertical';
import NavLine from '../Components/PanelComponents/NavLine';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <NavPillsHorizontal />
      <NavPillsVertical />
      <NavPillsWithoutBorderHorizontal />
      <NavPillsWithoutBorderVertical />
      <NavPillsWithIconHorizontal />
      <NavPillsWithIconVertical />
      <NavLine />
    </div>
  );
}

export default App;
