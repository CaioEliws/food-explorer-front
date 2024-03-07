import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { MdOutlineFileUpload } from "react-icons/md";

import { IngredientsItem } from "../../components/IngredientsItem";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { ButtonExit } from "../../components/ButtonExit";
import { SectionTwo } from "../../components/SectionTwo";
import { InputImage } from "../../components/InputImage";
import { Textarea } from "../../components/Textarea";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";


export function New() {
    const [image, setImage] = useState("");
    const [fileName, setFileName] = useState("");

    const [title, setTitle] = useState("");
    
    const [description, setDescription] = useState("");

    const [category, setCategory] = useState("meals");

    const [price, setPrice] = useState("price");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const navigate = useNavigate();

    function handleImageChange(e) {
        const file = e.target.files[0];
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

    async function handleNewDish(){
        if(!image || !title || !price) {
            return alert("Preencha todos os campos!!!");
        }

        if(!newIngredient) {
            return alert("Insira algum ingrediente para o seu prato!!!")
        }

        if(newIngredient) {
            return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar.")
        }

        try{
            const formData =  new FormData();

            formData.append("image", image);

            formData.append("title", title);
            formData.append("category", category);
            formData.append("price", price);
            formData.append("description", description);

            formData.append("ingredients", JSON.stringify(ingredients));


            await api.post("/dishes", formData);
            alert("Prato cadastrado com sucesso!");
            navigate(-1);
        }   catch ( error ) {
            if (error.response) {
                alert(error.response.data.message);
            }
        }

    }
    
    return(
        <Container>
            <HeaderAdmin />

            <main>
                <Form>
                    <header>
                        <ButtonExit />
                        <h1>Adicionar prato</h1>
                    </header>

                    <div>
                        <SectionTwo 
                                title="Imagem do prato"
                            >
                                <InputImage 
                                    icon={MdOutlineFileUpload}
                                    text={fileName || "Selecione imagem"}
                                    id="image"
                                    type="file"
                                    onChange={handleImageChange}
                                />
                        </SectionTwo>  



                        <SectionTwo title="Nome">
                            <Input 
                                placeholder="Ex.: Salada Ceaser"
                                type="text"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </SectionTwo>



                        <SectionTwo title="Categoria">
                            <select 
                                id="category"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option value="meals">Refeição</option>
                                <option value="desserts">Sobremesas</option>
                                <option value="drinks">Bebidas</option>
                            </select>
                        </SectionTwo>



                    </div>

                    <div>
                        <SectionTwo title="Ingredientes">
                            <div className="ingredientes">
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
                                    onChange={e => setNewIngredient(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </SectionTwo>

                        <div>
                            <SectionTwo title="Preço">
                                <Input 
                                    type="number"
                                    value={price}
                                    placeholder="R$ 00,00"
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </SectionTwo>
                        </div>
                    </div>

                    <div>
                        <SectionTwo title="Descrição">
                            <Textarea
                                type="text"
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                                onChange={e => setDescription(e.target.value)}
                            />
                        </SectionTwo>
                    </div>

                    <div className="btnSave">
                        <button 
                            className="Save"
                            type="button"
                            onClick={handleNewDish}
                        >
                            Adicionar prato
                        </button>
                    </div>
                </Form>

            </main>
            <Footer />
        </Container>
    )
}