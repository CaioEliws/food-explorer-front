import { Container, Logout, Menu, MenuMobile, CloseButton } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Input } from "../Input";
import { Button } from "../Button";
import { Logotipo } from "../Logotipo";
import { Footer } from "../Footer";

import { PiReceiptLight } from "react-icons/pi";
import { IoMdMenu, IoMdClose, IoIosSearch } from "react-icons/io";

export function Header({ onSearch }) {
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

    return(
        <Container>
            {
                MobileScreen && (
                <>
                    <Logotipo />

                    <Input
                        placeholder="Busque por pratos ou ingredientes"
                        icon={IoIosSearch}
                        onChange={(e) => handleSearch(e.target.value)}
                    />

                    <Button
                        children="Pedidos (0)" 
                        icon={PiReceiptLight}
                    />

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
                                <Logout onClick={signOut}>
                                    Sair
                                </Logout>
                            </li>
                        </ul>
                    </Menu>
                </>
            )}

            {
                !MobileScreen && (
                    <>
                        <Logotipo />
    
                        <MenuMobile>
                            <IoMdMenu onClick={handleMenuClickMobile} />
    
                            <ul id="list" className={isMenuVisible ? "visible" : ""}>
                                {
                                    isMenuVisible && (
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
                                                <Logout onClick={signOut}>
                                                    Sair
                                                </Logout>
                                            </li>
                                        </div>

                                        <Footer />
                                    </>
                                )}
                            </ul>
                        </MenuMobile>
                    </>
            )}

        </Container>
    )
}