import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { MdOutlineFileUpload } from "react-icons/md";

import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { ButtonExit } from "../../components/ButtonExit";
import { Input } from "../../components/Input";
import { SectionTwo } from "../../components/SectionTwo";
import { InputImage } from "../../components/InputImage";
import { IngredientsItem } from "../../components/IngredientsItem";
import { Textarea } from "../../components/Textarea";

import { Container, Form } from "./styles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Edit() {
    
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const [title, setTitle] = useState("");
    
    const [description, setDescription] = useState("");

    const [category, setCategory] = useState("meals");

    const [price, setPrice] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    
    const params = useParams();
    const navigate = useNavigate();

    function handleChangeImage(event) {
        const file = event.target.files[0];
        setImage(file);
        setFileName(file.name);
    }

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function handleDeletedDish() {

        try {
            await api.delete(`/dishes/${params.id}`);
            alert("Prato excluído com sucesso!");
            navigate("/");
        } catch(error) {
            if(error.response) {
                return alert(error.response.data.message);
            }
            return alert("Erro ao carregar informações");
        }
    }

    async function handleUpdateDish() {
        try {
            if(!image) {
                return alert("Selecione uma imagem para o prato!!!");
            }

            if(!title) {
                return alert("Digite o nome do prato!!!");
            }
    
            if(newIngredient) {
                return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar.")
            }

            if(!price) {
                return alert("Coloque um valor para o prato!!!");
            }

            if(!description) {
                return alert("Digite a descrição do prato!!!");
            }

            const formData = new FormData();
    
            formData.append("image", image);
            formData.append("title", title);
            formData.append("category", category);
            formData.append("price", price);
            formData.append("description", description);
    
            formData.append("ingredients", JSON.stringify(ingredients));
    
            await api.patch(`/dishes/${params.id}`, formData);
    
            alert("Prato editado com sucesso!");
            navigate("/");
    
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o prato.");
            }
        }
    }

    useEffect(() => {    
        async function fetchDish() {
            try {
                const response = await api.get(`/dishes/${params.id}`);

                const dish = response.data;

                setTitle(dish.title);
                setCategory(dish.category);
                setPrice(dish.price);
                setIngredients(dish.ingredients.map(ingredient => ingredient.name));
                setDescription(dish.description);


            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível atualizar o prato.");
                }
            }
        }
    
        fetchDish();
      }, []);

    return(
        <Container>
            <HeaderAdmin />

            <main>
                <Form>
                    <header>
                        <ButtonExit />
                        <h1>Editar prato</h1>
                    </header>

                    <div>
                        <SectionTwo
                            className="image"
                            title="Imagem do prato"
                        >
                            <InputImage 
                                icon={MdOutlineFileUpload}
                                title={"Imagem do prato"}
                                text={fileName || "Selecione imagem"}
                                id="image"
                                onChange={handleChangeImage}
                            />
                        </SectionTwo>                 

                        <SectionTwo title="Nome">
                            <Input 
                                placeholder="Ex.: Salada Ceaser"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} 
                            />
                        </SectionTwo>

                        <SectionTwo title="Categoria">
                            <select 
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="meals">Refeição</option>
                                <option value="desserts">Sobremesas</option>
                                <option value="drinks">Bebidas</option>
                            </select>
                        </SectionTwo>
                    </div>

                    <div>
                        <SectionTwo title="Ingredientes">
                            <div className="tags">
                                {
                                    ingredients.map((ingredient, index) => (
                                        <IngredientsItem 
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }
                                <IngredientsItem 
                                    $isNew 
                                    placeholder="Adicionar"
                                    value={newIngredient}
                                    onChange={e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </SectionTwo>

                        <div>
                            <SectionTwo title="Preço">
                                <Input 
                                    type="number" 
                                    placeholder="R$ 00,00"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </SectionTwo>
                        </div>
                    </div>

                    <div>
                        <SectionTwo title="Descrição">
                            <Textarea
                                type="text"
                                value={description}
                                placeholder="A Salada César é uma opção refrescante para o verão."
                                onChange={e => setDescription(e.target.value)}
                            />
                        </SectionTwo>
                    </div>

                    <div className="buttons">
                        <button 
                            className="btnDelete"
                            type="button"
                            onClick={handleDeletedDish}
                        >
                            Excluir prato
                        </button>

                        <button 
                            className="btnSave"
                            type="button"
                            onClick={handleUpdateDish}
                        >
                            Salvar Alterações
                        </button>
                    </div>
                </Form>

            </main>
            <Footer />
        </Container>
    )
}