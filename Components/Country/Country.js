import { StyleSheet, Text, View, ScrollView } from 'react-native';
import api from '../helpers/api';

export default function Country(curl) {
    console.log(5);
    const [country, setCountry] = useState([]);
    const getCountry = async () => {
        try {
            
          const { info } = await api.get({curl});
          setCountry(info);
        }
        catch (e) {
          console.log(e);
        }
    }
    useEffect(() => {
        getCountry();
    }, []); 
    return (
        country.map(({names}) => {
            return(
                <ScrollView>
                    <Text>{names.full}</Text>
                </ScrollView>
            )
        })
       
    );
}  