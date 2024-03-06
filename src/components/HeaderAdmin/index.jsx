import { Container, Logout, Menu } from "./styles";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import { Logotipoadm } from "../Logotipoadm";

import { IoIosSearch, IoMdMenu } from "react-icons/io";

export function HeaderAdmin({ setSearch }) {
  const { signOut } = useAuth();

  const handleMenuClick = () => {
    const list = document.getElementById("list");
    list.classList.toggle("visible");
  };

  return (
    <Container>
      <Logotipoadm />

      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={IoIosSearch}
        // onChange={(e) => setSearch(e.target.value)}
      />

      <Link 
        children="Novo Prato" 
        to="/new"
      />

      <Menu onClick={handleMenuClick}>
        <IoMdMenu />
        <ul id="list">
          <li>
            <Link to="/">Pedidos</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Logout onClick={signOut}>Sair</Logout>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}
