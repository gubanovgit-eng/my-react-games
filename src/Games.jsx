import { useEffect, useState } from "react"

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

    // Добавление игры
    function addGame() {
        if (newGame.trim() === "") return

        setGames([...games, newGame.trim()])
        setNewGame("")
    }

    // Удаление игры
    function removeGame(gameToRemove) {
        setGames(games.filter((game) => game !== gameToRemove))
    }

    // Переименование игры
    function renameGame(oldName) {
        const newName = prompt("Введи новое название игры:")

        if (!newName || newName.trim() === "") return

        setGames(
            games.map((game) => game === oldName ? newName.trim() : game)
        )
    }

    return (
        <section className="games">
            <h2>Мои игры</h2>

            <div className="game-form">
                <input value={newGame} onChange={(event) => setNewGame(event.target.value)} placeholder="Название игры" />

                <button onClick={addGame}>+ Добавить</button>
            </div>

            {games.map((game) => (
                <div className="game-item" key={game}>
                    <span>{game}</span>

                    {/* Кнопка редактирования */}
                    <button className="edit-button" onClick={() => renameGame(game)}>✐</button>

                    {/* Кнопка удаления */}
                    <button className="delete-button" onClick={() => removeGame(game)}>𐄂</button>
                </div>
            ))}
        </section>
    )
}

export default Games