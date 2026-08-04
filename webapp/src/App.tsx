
export const App = () =>{
const ideas = [
  { id: 1, title: "idea 1", description: "idea 1 description" },
  { id: 2, title: "idea 2", description: "idea 2 description" },
  { id: 3, title: "idea 3", description: "idea 3 description" },
  { id: 4, title: "idea 4", description: "idea 4 description" },
  { id: 5, title: "idea 5", description: "idea 5 description" },
]

  return <div>
          <h1>IdeaApp</h1>
          <div>
            {ideas.map((idea) => (
              <div key={idea.id}>
                <h2>{idea.title}</h2>
                <p>{idea.description}</p>
              </div>
            ))}
          </div>
        </div>
}