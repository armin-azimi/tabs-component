import './Tabs.css';

const tabContent = [
  { title: 'Tab 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Tab 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Tab 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
  { title: 'Tab 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="Tabs">
      <nav className="Tabs-nav">
        {tabContent.map((content, index) => (
          <button
            key={index}
            className={`Tabs-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            Tab{index + 1}
          </button>
        ))}
      </nav>
      <div className="Tabs-content">
        <h2>{tabContent[activeTab].title}</h2>
        <p>{tabContent[activeTab].description}</p>
      </div>
    </div>
  );
}

export default Tabs;
