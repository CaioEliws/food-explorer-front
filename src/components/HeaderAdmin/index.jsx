import { Container, Logout, Menu, MenuMobile, CloseButton } from "./styles";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import { Input } from "../Input";
import { Logotipoadm } from "../Logotipoadm";
import { Footer } from "../Footer";

import { IoIosSearch, IoMdClose,IoMdMenu } from "react-icons/io";

export function HeaderAdmin({ onSearch }) {
  const { signOut } = useAuth();

  const [isMenuVisible, setMenuVisible] = useState(false);

  const MobileScreen = window.innerWidth > 768;

  const handleMenuClick = () => {
    const list = document.getElementById("list");
    list.classList.toggle("visible", !isMenuVisible);
    setMenuVisible(!isMenuVisible);
  };
  

  const handleMenuClickMobile = () => {
    const list = document.getElementById("list");
    list.classList.toggle("visible", !isMenuVisible);
    setMenuVisible(!isMenuVisible);
  };

  const handleSearch = (value) => {
    if (typeof onSearch === "function") {
      onSearch(value);
      console.log("Pesquisando por:", value);
    }
  }

  return (
    <Container>
      {MobileScreen && (
        <>
          <Logotipoadm />

          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={IoIosSearch}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <Link children="Novo Prato" to="/new" />

          <Menu>
            <IoMdMenu onClick={handleMenuClick} />

            <ul id="list">
              <li>
                <Link to="/">Pedidos</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/">Historico de pedidos</Link>
              </li>
              <li>
                <Logout onClick={signOut}>Sair</Logout>
              </li>
            </ul>
          </Menu>
        </>
      )}

      {
        !MobileScreen && (
          <>
            <Logotipoadm />

            <MenuMobile>
              <IoMdMenu onClick={handleMenuClickMobile} />

              <ul id="list" className={isMenuVisible ? "visible" : ""}>
                {isMenuVisible && (
                  <>
                    <header>
                      <CloseButton onClick={handleMenuClick}><IoMdClose /></CloseButton>
                      <h2>Menu</h2>
                    </header>

                    <div>
                      <Input
                        placeholder="Busque por pratos ou ingredientes"
                        icon={IoIosSearch}
                        onChange={(e) => handleSearch(e.target.value)}
                      />

                      <li>
                        <Link to="/">Pedidos</Link>
                      </li>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/">Historico de pedidos</Link>
                      </li>
                      <li>
                        <Logout onClick={signOut}>Sair</Logout>
                      </li>
                    </div>

                    <Footer />
                  </>
                )}
              </ul>
            </MenuMobile>
          </>
        )
      }
    </Container>
  );
}