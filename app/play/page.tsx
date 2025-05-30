import QuizPage from "@/app/quiz/page";
import GamePage from "@/app/game/page";

export default function PlayPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Play Zone</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Quiz</h2>
        <QuizPage />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Game</h2>
        <GamePage />
      </section>
    </div>
  );
}
