import { Container, Logout, Menu, MenuMobile, CloseButton, SearchResult } from "./styles";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import { Input } from "../Input";
import { Logotipoadm } from "../Logotipoadm";
import { Footer } from "../Footer";

import { api } from "../../services/api";

import { IoMdClose,IoMdMenu } from "react-icons/io";

export function HeaderAdmin({ onSearch, searchResults }) {
  const { signOut } = useAuth();

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

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
    setShowSearchResults(value !== '');

    if (typeof onSearch === "function") {
      onSearch(value);
    }
  }

  return (
    <Container>
      {
        MobileScreen && (
          <>
            <Logotipoadm />

            <Input
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => handleSearch(e.target.value)}
            >
              {
                searchResults && (
                  <SearchResult style={{ display: showSearchResults ? 'flex' : 'none' }}>
                    {searchResults.map((dish) => (
                      <Link 
                        to={`/details/${dish.id}`} 
                        key={dish.id}
                        onClick={() => {
                          setTimeout(() => {
                              window.location.reload();
                          }, 1);
                        }}
                      >
                        <img src={`${api.defaults.baseURL}/files/${dish.image}`} />
                        <p>{dish.title}</p>
                      </Link>
                    ))}
                  </SearchResult>
                )
              }
            </Input>


            <Link className="new" children="Novo Prato" to="/new" />

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
                  <Logout to="/" onClick={signOut}>Sair</Logout>
                </li>
              </ul>
            </Menu>
          </>
        )
      }

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
                        onChange={(e) => handleSearch(e.target.value)}
                      >
                          {
                            searchResults && (
                              <SearchResult style={{ display: showSearchResults ? 'flex' : 'none' }}>
                                {searchResults.map((dish) => (
                                  <Link 
                                    to={`/details/${dish.id}`} 
                                    key={dish.id}
                                    onClick={() => {
                                      setTimeout(() => {
                                          window.location.reload();
                                      }, 1);
                                    }}
                                  >
                                    <img src={`${api.defaults.baseURL}/files/${dish.image}`} />
                                    <p>{dish.title}</p>
                                  </Link>
                                ))}
                              </SearchResult>
                            )
                          }
                      </Input>

                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/new">Novo Prato</Link>
                      </li>
                      <li>
                        <Link to="/">Pedidos</Link>
                      </li>
                      <li>
                        <Link to="/">Historico de pedidos</Link>
                      </li>
                      <li>
                        <Logout to="/" onClick={signOut}>Sair</Logout>
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