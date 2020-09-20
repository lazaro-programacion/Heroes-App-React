import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../../heroes/HeroCard';
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string';
import { getHeroByName } from '../../selectors/getHeroByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation()
    
    const { q = '' } = queryString.parse(location.search)

    const [formValues, handelInputChange] = useForm(
        {
            searchText: q
        }
        )

        const { searchText } = formValues
        
        

    const heroesFiltrados = useMemo(() => getHeroByName(q), [q])


    const handelSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
        console.log(searchText)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handelSearch}>
                        <input type="text"
                            placeholder='Busca tu heroe...'
                            name='searchText'
                            value={searchText}
                            className="form-control"
                            onChange={handelInputChange}
                            autoComplete='off'
                        />

                        <button type='submit' className="btn m-1 btn-outline-info btn block"> Search... </button>

                    </form>

                </div>

                <div className="col-7">
                    <h4> Resultados </h4>

                    {
                        (q === '') && <div className="alert alert-info"> Busca tu heroe </div>
                    }

                    {
                        (q !== '' && heroesFiltrados.length === 0) && <div className="alert alert-danger"> El heroe {q} no existe </div>
                    }

                    {
                        heroesFiltrados.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
