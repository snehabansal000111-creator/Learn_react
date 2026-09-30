import Card from './components/Card';
const App = () => {
  const jobs = [
    {
      id: 1,
      logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      company: "Amazon",
      posted: "5 days ago",
      title: "Senior UI/UX Designer",
      type: "Part Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      logo: "https://tse4.mm.bing.net/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      company: "Google",
      posted: "2 days ago",
      title: "Frontend Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$95/hr",
      location: "Bangalore, India",
    },
    {
      id: 3,
      logo: "https://static.vecteezy.com/system/resources/previews/027/127/592/original/microsoft-logo-microsoft-icon-transparent-free-png.png",
      company: "Microsoft",
      posted: "1 day ago",
      title: "AI/ML Engineer",
      type: "Full Time",
      level: "Entry Level",
      salary: "$85/hr",
      location: "Hyderabad, India",
    },
    {
      id: 4,
      logo: "https://logos-world.net/wp-content/uploads/2023/07/Adobe-Logo-New.png",
      company: "Adobe",
      posted: "3 days ago",
      title: "Product Designer",
      type: "Part Time",
      level: "Senior Level",
      salary: "$110/hr",
      location: "Noida, India",
    },
    {
      id: 5,
      logo: "https://play-lh.googleusercontent.com/0-sXSA0gnPDKi6EeQQCYPsrDx6DqnHELJJ7wFP8bWCpziL4k5kJf8RnOoupdnOFuDm_n",
      company: "Flipkart",
      posted: "4 days ago",
      title: "React Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$75/hr",
      location: "Bangalore, India",
    },
    {
      id: 6,
      logo: "https://static.vecteezy.com/system/resources/previews/021/515/152/non_2x/ibm-brand-symbol-software-computer-logo-white-design-illustration-with-blue-background-free-vector.jpg",
      company: "IBM",
      posted: "6 days ago",
      title: "Data Analyst",
      type: "Part Time",
      level: "Entry Level",
      salary: "$65/hr",
      location: "Gurugram, India",
    },
    {
      id: 7,
      logo: "https://cdn.simpleicons.org/accenture",
      company: "Accenture",
      posted: "1 week ago",
      title: "Python Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$70/hr",
      location: "Pune, India",
    },
    {
      id: 8,
      logo: "https://cdn.simpleicons.org/tcs",
      company: "TCS",
      posted: "2 days ago",
      title: "Java Developer",
      type: "Full Time",
      level: "Entry Level",
      salary: "$55/hr",
      location: "Chennai, India",
    },
    {
      id: 9,
      logo: "https://cdn.simpleicons.org/wipro",
      company: "Wipro",
      posted: "3 days ago",
      title: "Cloud Engineer",
      type: "Full Time",
      level: "Senior Level",
      salary: "$90/hr",
      location: "Hyderabad, India",
    },
    {
      id: 10,
      logo: "https://cdn.simpleicons.org/swiggy",
      company: "Swiggy",
      posted: "5 days ago",
      title: "Product Designer",
      type: "Part Time",
      level: "Mid Level",
      salary: "$80/hr",
      location: "Gurugram, India",
    },
  ];


  return (
    <><header style={{ color: 'white', background: 'black', textAlign: 'center', borderBottom: '2px solid white' }}>
      <h1 >First React Project (props)</h1>
      <h2 >Jobs Opening Cards UI</h2>
    </header>
      <div className='parent' >
        {jobs.map(function (ele, id) {
          return <div key={id}><Card logo={ele.logo} company={ele.company} posted={ele.posted} title={ele.title} type={ele.type} level={ele.level} salary={ele.salary} location={ele.location} />
          </div>
        })}
      </div>
    </>
  )
}
export default App;


