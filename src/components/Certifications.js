import {Link} from 'react-router-dom';
function Certifications(){
    return(
        <>
        <p>
            <h3>Honors & Awards</h3>
            <li>I participated in a C language coding competition held at SDMIT Ujire in 2019 and reached the finals.</li>
            <li>I earned Gold badges for Problem Solving, Java, Python, C++, and SQL on Hackerrank.</li>
        </p>
        <p>
            <h3>Certifications</h3>
            <ul>
                <li>Skill certication for CSS- <Link to="https://www.hackerrank.com/certificates/18ff149663e3">Hackerrank</Link></li>
                <li>Skill certication for SQL(Advanced)- <Link to="https://www.hackerrank.com/certificates/3760068ce923">Hackerrank</Link></li>
                <li>Skill certication for Problem Solving(DSA)- <Link to="https://www.hackerrank.com/certificates/4ff44886f115">Hackerrank</Link></li>
            </ul>
        </p>
        
        </>
    );
}
export default Certifications;