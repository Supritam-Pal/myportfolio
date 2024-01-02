// src/components/ServicesSection.js
import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  button{
    background: blue;
    margin:10px;
    border-radius: 10%;
    color:white;
    height: 30px;
  },
  button:hover {
  background: green;
},
.main{
  justify-content: center;
  align-item:center;
  display: flex;
  flex-direction: row;
  margin:50px;
},
h2{
  height: 10px;
  justify-content: center;
  align-item: center;
  text-align: center;
  font-size: 40px;
  color:white;
}
h3{
  color:yellow;
  margin-left:60px;
  padding-left:40px
}
span{
  color:orange;
  text-decoration:bold
}
`;

const ServicesSection = () => {
  return (
    <ServicesContainer>
    
  <h2>Projects</h2>
  <div className='main'>
  <div className='vanilla'>
  <h3>Vanilla JS project</h3> 
  <ol>
    <li>
    <span> FunTranslator :</span>
    <a href="https://palsupritamtbananatranslated.netlify.app/" target="_blank"><button>Project Link</button> </a>
    <span> <a href="https://github.com/Supritam-Pal/neogcamp-banana-speak"><button>SourceCode</button></a></span>
    </li>

    <li>
    <span> Cash Register :</span>
    <a href="https://supritamcashregister.netlify.app" target="_blank"><button>Project Link</button> </a>
    <span> <a href="https://github.com/Supritam-Pal/Cash-Register"><button>SourceCode</button></a></span>
    </li>

    <li>
    <span> Stock purchase :</span>
    <a href="https://palsupritamstockpurchase.netlify.app" target="_blank"><button>Project Link</button> </a>
    <span> <a href="https://github.com/Supritam-Pal/Stocks-Purchase"><button>SourceCode</button></a></span>
    </li>

    <li>
    <span> Lucky Birthday :</span>
    <a href="https://isbirthdaylucy.netlify.app" target="_blank"><button>Project Link</button> </a>
    <span><a href="https://github.com/Supritam-Pal/luckybirthday"><button>SourceCode</button></a></span>
    </li>
  </ol>
  </div>

  <div className='react'>
  <h3>REACT Project</h3> 
  <ol>
    <li>
    <span> ONLINE CODEEDITOR :</span>
    <a href="https://sensational-rugelach-a393c9.netlify.app" target="_blank"><button>Project Link</button> </a>
    <span> <a href="https://github.com/Supritam-Pal/Code_Editor"><button>SourceCode</button></a></span>
    </li>

    <li>
    <span> TAKE NOTES :</span>
    <a href="https://supritam-pal.github.io/Take_Notes/" target="_blank"><button>Project Link</button> </a>
    <span> <a href="https://github.com/Supritam-Pal/Take_Notes"><button>SourceCode</button></a></span>
    </li>

    <li>
    <span> TODOLIST :</span>
    <a href="https://supritam-pal.github.io/Todolist_react/" target="_blank"><button>Project Link</button> </a>
    <span> <a href="https://github.com/Supritam-Pal/Todolist_react"><button>SourceCode</button></a></span>
    </li>

    <li>
    <span> NETFLIX 2020 :</span>
    <a href="https://supritam-pal.github.io/Netflix_2020/" target="_blank"><button>Project Link</button> </a>
    <span><a href="https://github.com/Supritam-Pal/Netflix_2020"><button>SourceCode</button></a></span>
    </li>

    <li>
    <span> EMOJI INTERPRETER :</span>
    <a href="https://kwqkc6.csb.app/" target="_blank"><button>Project Link</button> </a>
    </li>

  </ol>
  </div>
  </div>
    </ServicesContainer>
  );
};

export default ServicesSection;
