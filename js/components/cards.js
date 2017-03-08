var React = require('react');
var ReactDOM = require('react-dom');


var Cards = function() {



    return (
        <div className="cards">
           
    <div className="row">


        <div className="types showDetails-0">
            <div className="civ-types">
                <h1 id="a2">Type 0 <br/> Planetary  Civilization </h1>
                <a href="#">
                    <div className="image-wrapper civ0"> </div>
                </a>
                <p>A civilization that harnesses the energy of its home planet, but not to its full potential just yet. As you might have guessed, that’s our good old human selves. We’re currently at about 0.73 on the Kardashev Scale. It is presumed we’ll
                    reach type I in about 100 years, give or take, depending on how fast our technology advances and how diligently we procreate.</p>
            </div>
        </div>


        <div className="types showDetails-1">
            <div className="civ-types">
                <h1 id="a3">Type 1 Interplanetary Civilization </h1>
                <a href="#">
                    <div className="image-wrapper civ1"> </div>
                </a>
                <p>A civilization that is capable of harnessing the total energy of its home planet. This is where we’re heading, whether we want it or not. The good part would be that we’d achieve an ultimate peak, the bad part is that we’d then soon have
                    more energy demand than supply, because evolution can’t be so easily halted. We’d have to leave Earth and start pumping other planets for their worth, or even milk our own star directly for its power.</p>
            </div>
        </div>


        <div className="types showDetails-2">
            <div className="civ-types">
                <h1 id="a4">Type 2 Interstellar Civilization </h1>
                <a href="#">
                    <div className="image-wrapper civ2"> </div>
                </a>
                <p>A civilization capable of harnessing the energy radiated by its own star--for example, the stage of successful construction of a Dyson sphere--with energy consumption at ≈4×1033 erg/sec. Lemarchand stated this as a civilization capable
                    of utilizing and channeling the entire radiation output of its star. The energy utilization would then be comparable to the luminosity of our Sun, about 4×1033 erg/sec (4×1026 watts).</p>
            </div>
        </div>

    </div>
    


    
    <div className="row">


        <div className="types showDetails-3">
            <div className="civ-types">
                <h1 id="a5">Type 3 Intergalactic Civilization </h1>
                <a href="#">
                    <div className="image-wrapper civ3"> </div>
                </a>
                <p>A civilization in possession of energy on the scale of its own galaxy, with energy consumption at ≈4×1044 erg/sec. Lemarchand stated this as a civilization with access to the power comparable to the luminosity of the entire Milky Way galaxy,
                    about 4×1044 erg/sec (4×1037 watts).</p>
            </div>
        </div>

        <div className="types showDetails-4">
            <div className="civ-types">
                <h1 id="a6">Type 4 <br/> Universal Civilization </h1>
                <a href="#">
                    <div className="image-wrapper civ4"> </div>
                </a>
                <p>A universal civilization, capable of harnessing the energy of the whole universe. This civilization would be supergalactic, able to travel throughout the entire universe and consume the energy output of several—possibly all—galaxies. Think
                    of that real estate size! It would also be capable of projects of gargantuan proportions, such as manipulating space-time and tinkering with entropy, thus reaching immortality on a grand scale. An essentially indestructible and highly
                    utopian civilization.</p>
            </div>
        </div>

        <div className="types showDetails-5">
            <div className="civ-types">
                <h1 id="a7">Type 5 <br/> Time <br/> Loards+ </h1>
                <a href="#">
                    <div className="image-wrapper civ5"> </div>
                </a>
                <p>Even more abstract is the type VI civilization. The type VI exists outside of time and space, and is capable of creating universes and multiverses, and destroying them just as easily. It’s similar in concept to a deity. It’s hard to imagine
                    a story with such a civilization, since its perfection and indestructible nature would offer little conflict potential. Unless, of course, you’re a lower type civilization waiting to be chewed, swallowed, and digested by one such type
                    VI monstrosity. Recipe for paraversal tragedy.</p>
            </div>
        </div>

    </div>
    
    </div>

    );
};

module.exports = Cards;