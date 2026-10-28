import { useEffect, useState } from "react"

import GameItem from "./GameItem";

function Games() {

    const [games, setGames] = useState(() => {
        const savedGames = localStorage.getItem("my-games")

        return savedGames
            ? JSON.parse(savedGames)
            : [
                "Euro Truck Simulator 2",
                "Minecraft",
                "GTA V",
            ]
    })

    useEffect(() => {
        localStorage.setItem("my-games", JSON.stringify(games))
    }, [games])

    const [newGame, setNewGame] = useState("")

    const [message, setMessage] = useState("")

    const [search, setSearch] = useState("")

    // Добавление игры

    function addGame() {
        const name = newGame.trim();

        if (name === "") {
            setMessage("Введи название игры.");
            return;
        }

        const alreadyExists = games.some(
            (game) => game.toLowerCase() === name.toLowerCase()
        );

        if (alreadyExists) {
            setMessage("Такая игра уже есть в списке.");
            return;
        }

        setGames([...games, name]);
        setNewGame("");
        setMessage("Игра успешно добавлена!");
    }


    // Удаление игры
    function removeGame(gameToRemove) {
        setGames(games.filter((game) => game !== gameToRemove))
    }

    // Переименование игры

    function renameGame(oldName) {
        const input = prompt("Введи новое название игры:", oldName);

        if (input === null) return;

        const newName = input.trim();

        if (newName === "") {
            alert("Название не может быть пустым!");
            return;
        }

        const alreadyExists = games.some(
            (game) =>
                game !== oldName &&
                game.toLowerCase() === newName.toLowerCase()
        );

        if (alreadyExists) {
            alert("Такая игра уже есть в списке!");
            return;
        }

        setGames(
            games.map((game) =>
                game === oldName ? newName : game
            )
        );
    }

    // Фильтрование списка
    const filteredGames = games.filter((game) =>
        game.toLowerCase().includes(search.trim().toLowerCase())
    )

    return (
        <section className="games">
            <h2>Мои игры</h2>

            {message && (
                <p className="game-message" role="status">
                    {message}
                </p>
            )}

            {/* Поисковая строка */}
            <input
                className="search-input"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="🔎 Найти игру..."
            />

            <div className="game-form">
                <input
                    value={newGame}
                    onChange={(event) => {
                        setNewGame(event.target.value)
                        setMessage("")
                    }} placeholder="Название игры" />

                <button onClick={addGame}>+ Добавить</button>
            </div>

            {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                    <GameItem
                        key={game}
                        game={game}
                        onRename={renameGame}
                        onRemove={removeGame}
                    />
                ))
            ) : (
                <p className="game-message">Игры не найдены.</p>
            )}
        </section>
    )
}

export default Games