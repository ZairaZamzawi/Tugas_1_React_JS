import React from 'react';
import MenuKontak from './Page/MenuKontak';
import MenuUtama from './Page/MenuUtama';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuProduct from './Page/MenuProduct';


function Header() {
  return (
    <div>
      <h3>Ini Halaman Untuk Header</h3>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h3>Ini Halaman Untuk Footer</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <Footer />
    </div>
  );
}

export default App;
