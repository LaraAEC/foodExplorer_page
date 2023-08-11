import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useMediaQuery } from 'react-responsive';

import { FiChevronLeft } from 'react-icons/fi';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { Container } from './styles';
import { Section } from '../../../components/Section';
import { ButtonText } from '../../../components/ButtonText';
import { Button } from '../../../components/Button'; 
import { Footer } from '../../../components/Footer'; 
import { UserFavoriteDish } from './../../../components/UserFavoriteDish';


import { toast } from "react-toastify";
import { Rings } from "react-loader-spinner";

export function UserFavorites () {
    const isMobile = useMediaQuery({ maxWidth: 1023 });

    const { user, isLoading, setIsLoading } = useAuth();

    const [image, setImage] = useState({});
    const [favorites, setFavorites] = useState([]);

    const navigate = useNavigate();

    function handleBack () {
        navigate(-1)
    };

async function handleRemoveFavorites (deleted) {
        setIsLoading(true);
        await api.delete(`/favorites/${deleted}`);
        const response = await api.get("/favorites");
        setFavorites(response.data);
        setIsLoading(false);
        toast.success("Prato removido dos favoritos.", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    useEffect(() => {
        async function fetchFavorites() {
            setIsLoading(true);
            const response = await api.get(`/favorites/:${user.id}`);
            setIsLoading(false);
            setFavorites(response.data);
        }

        fetchFavorites();
    }, [])

    useEffect(() => {
        function fetchImageDish () {
            if(favorites) {
                setImage((prevState) => ({
                    ...prevState,
                    ...favorites.reduce((acc, dish) => {
                        if (dish.photo) {
                            acc[dish.id] = `${api.defaults.baseURL}/files/${dish.photo}`;
                        }
                        return acc;
                    }, {}),
                }));
            }
        };

        fetchImageDish();
    }, [favorites])

    return (
        <Container>
          {isMobile ? <UserMobileHeader /> : <UserDesktopHeader onChange={e => setSearch(e.target.value)} />}

            <Section title="Meus favoritos">
            {
                isLoading ?
                    (
                    <div className="loader">
                        <Rings
                            color="#065E7C"
                            width="90"
                            height="90"
                        />
                    </div>
                    )
                :
                (
                <>
            {
                favorites &&
                <ul>
                    <li>
                    {
                        favorites.map((dish, index) => (
                            <UserFavoriteDish
                            key={String(index)}
                            data={{
                                title: dish.title,
                                imageDish: image[dish.id],
                            }}
                            onClick={() => handleRemoveFavorites(dish.id)}
                            />
                        ))
                    }
                    </li>
                </ul>
            }

                    <footer>
                    <ButtonText
                        title="Voltar"
                        icon={FiChevronLeft }
                        onClick={handleBack} 
                    />
                    </footer>
                    </>
                    )
            }
            </Section>

            <Footer/>
        </Container>
    )
}