export default function Dashboard() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <h1>Study Dashboard</h1>
        <p>
          Organize your learning, practice questions, and track your progress.
        </p>
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <span className="card-icon">🤖</span>
          <h2>AI Assistant</h2>
          <p>
            Ask questions, understand difficult topics, and get AI-powered
            explanations.
          </p>
          <button>Ask AI</button>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">📚</span>
          <h2>Study Materials</h2>
          <p>
            Keep your notes, resources, and important study materials organized.
          </p>
          <button>View Materials</button>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">✏️</span>
          <h2>Practice</h2>
          <p>
            Solve practice questions and improve your preparation step by step.
          </p>
          <button>Start Practice</button>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">📊</span>
          <h2>Progress</h2>
          <p>
            Track your study activity and see how your preparation is improving.
          </p>
          <button>View Progress</button>
        </div>
      </section>

      <section className="dashboard-overview">
        <h2>Study Overview</h2>

        <div className="overview-grid">
          <div>
            <strong>0</strong>
            <span>Questions Solved</span>
          </div>

          <div>
            <strong>0</strong>
            <span>Study Sessions</span>
          </div>

          <div>
            <strong>0%</strong>
            <span>Progress</span>
          </div>

          <div>
            <strong>Ready</strong>
            <span>AI Assistant</span>
          </div>
        </div>
      </section>
    </main>
  );
}