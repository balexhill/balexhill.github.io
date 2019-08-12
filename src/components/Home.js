import React from 'react';

const Home = () => {
  return (
    <section>
      <div className="container">
        <h1>
          <div className='smaller-font'>it's</div>
          <div className='bigger-font'>Brittany</div>
        </h1>
        <div>
          <h3>Software Developer</h3>
        </div>
        <nav>
          <ul>
            <li><a href='mailto:ibrittanyhill@gmail.com'>Email</a></li>
            <li><a href='https://github.com/ibrittanyhill' rel="noopener noreferrer" target='_blank'>Github</a></li>
            <li><a href='https://linkedin.com/in/ibrittanyhill' rel="noopener noreferrer" target='_blank'>LinkedIn</a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Home;
