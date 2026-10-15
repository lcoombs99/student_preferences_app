import useLocalStorage from './hooks/useLocalStorage.js';

function App() {

  const topics = [
    'Web Development',
    'Cybersecurity',
    'Databases',
    'Artificial Intelligence',
    'Mobile Development',
    'Operating Systems'
  ];

  // array more like useState() rename in position
  const [name, setName] = useLocalStorage('studentName', '');
  const [language, setLanguage] = useLocalStorage('language', 'JavaScript');
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [favoriteTopics, setFavoriteTopics] = useLocalStorage('favoriteTopics', []);

  const topicChangeHandler = (topic) => {
    setFavoriteTopics((selectedTopics) =>
      selectedTopics.includes(topic)
        ? selectedTopics.filter((item) => item !== topic)
        : [...selectedTopics, topic]
    );
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log('Saved Preferences:', {
      name: name,
      language: language,
      darkMode: darkMode,
      favoriteTopics: favoriteTopics
    });

    alert('Preferences saved!');
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h1>Student Preferences</h1>

      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="language">Favorite Programming Language</label>
          <select
            id="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
          </select>
        </div>

        <div className="form-control checkbox-control">
          <label htmlFor="darkMode">Dark Mode</label>
          <input
            type="checkbox"
            id="darkMode"
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
          />
        </div>

        <div className="form-control topics-control">
          <fieldset className="topics-fieldset">
            <legend>Favorite Topics</legend>

            {topics.map((topic) => (
              <div key={topic} className="topic-option">
                <label htmlFor={topic}>{topic}</label>
                <input
                  type="checkbox"
                  id={topic}
                  checked={favoriteTopics.includes(topic)}
                  onChange={() => topicChangeHandler(topic)}
                />
              </div>
            ))}
          </fieldset>
        </div>

        <button type="submit">Save Preferences</button>
      </form>

      <div className="preferences">
        <h2>Current Preferences</h2>
        <p>
          <strong>Name:</strong> {name || 'Not set'}
        </p>
        <p>
          <strong>Favorite Language:</strong> {language || 'Not set'}
        </p>
        <p>
          <strong>Dark Mode:</strong> {darkMode ? 'On' : 'Off'}
        </p>
        <p>
          <strong>Favorite Topics:</strong>{' '}
          {favoriteTopics.length > 0
            ? favoriteTopics.join(', ')
            : 'None selected'}
        </p>
      </div>

    </div>
  );
}

export default App;