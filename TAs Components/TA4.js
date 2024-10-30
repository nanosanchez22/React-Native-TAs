import React, {useState} from "react";
import { View, Button, Image, StyleSheet } from "react-native";




const TA4Screen = () => {
    const img1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAdVBMVEX///8AAAD8/PwEBAQNDQ2JiYnX19fAwMCenp729vb5+fm4uLjv7+/U1NTl5eVxcXEeHh6mpqZiYmLJyclHR0dNTU2xsbFVVVVdXV3n5+cRERE8PDx8fHzd3d2EhISkpKQrKyuampo1NTWSkpIYGBgjIyNJSUnpiCFjAAAEO0lEQVR4nO3ci3KiMBQG4CTcRFFEFFS82+77P+ImQJEO1q3JsGEO/9dpp1PamfA3nEAIMAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4UQbMrYdJdGtlsyTCI9rTmf2W7GEIWJTIYjnGcCFY0jPwLbLRmc6MC/zG23ZWgWm7LbKO7CdmMG5liUB1SZzlrYbs2AyCzCTd1rlBNDOg+CxU02jio5CKcla+qN/LpBNG3RspUNBvLv7o+C4/DcdmuGRXWcJhv3aLs5w5K1Riqe2W7NwOT8kY6Hkeq7uhI78vPAEM43i7raOOXpn0A4DRlF0NTixHZrhierS07uq7nAUR5W1T53Dhr5g6zsONvg8VvjNY2Ovr+blt8LFY6/jb1sUQUTLtLsnAR+JNjokhLH86rYq45y2U78sPpZs3GRrC71iO4Wh2xnrZk2hLO8ufJWiuuxlUy2rTcq6pt9PI4ZQVVnRbDmHduszGcxi93uRs5jv1ulyJE7GMWcty8TvnqQm3vX1fJZMqr/LJMxjF/prRNN+whzeH0sdTYdQvLhBB9NZ/gpn6fktji03fgeqf97sH8RwCsquBPhniMr6nH5snu8TEf+4dn2LvRJ3VrQDofzG915U3lMeK/ryj/EEeWKPNcPRroTTkb+17cm2Vxtt79fqckx5RE+BVQ7ttINRhbxle0d6JWoJ0H1XEhfmMuec9YfxjnxaVPBNvol5xJObbe/T0KEuslwNVKRLcaKMDrJ8W03v2+JfjZ72h1H7p2nH05OPhyD0+O77db3bqMfDumZilKhHw71xSjCJJyEfM0xCGdiu/W9MwjnYLvtvTMoyGvbbe+d9oQF5+6Ues056YfDU9oVWbCJQTix7eb3LTAIZ096rqueCNSc0HHVBQTpA4uZ3LNyjsTTMbjydHhOeQGK3LGrwa1gh/pzaXOT21blNQThtV1T1ywddcuTbjork3DUkn/KL2+YGYWjHmtMbe9Cb0T0oZ9NLab7gFpsGI3sPHuqRVmkxj2HH4jWZCGEwYRX3XUI395LjJa9SYXtPeiNYNHNsOPQfZ+OrBYTg2UoMptbSLPisPKZqujTqOskZLMpTUyKzo3yKbIUPXma6NcyouN4TZjMlubEb0Kw8jRZsyjPKV+Vs+pZtIvWyY6jViITVz1a/344Dv9Ddxhv01rj5Y7lFVU5f6/zqN9NKE+SPgi2W74ZjjOml6K8uezW4Xk4mreiCDZ7L51iJ8Q4DqtSxh+PSDcvlPyp39zG9hbO4KNJp4qmiM+Bf5wH9+2yKjPO19cN7WUEHfII8Tetqnzz5s1D42I3W1WZVbyQkX4s5KnoXE99fcZBdbn9qCqLa/0mEHck7/jomqbXk3eeP33RgIjS5HoOiE9S/Gg0g4+OcnQWr05fxnJq89zrfae8JAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7lL1BLJ9mGKMGLAAAAAElFTkSuQmCC'
    const img2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAAclBMVEX3+PijxDn7+/+ewSSgwi75+fvG2ZTz9vCewSfm7dbe6MecwB33+Pbt8uXk7NPb5sDL3J+50XazzmfR4KzW47abvxWqyE6ox0a30HHx9OzK3J6lxT7X5Lno7tq1z2zh6s3D142uy1rP36i/1YS8036xzGGfCW1RAAAEsUlEQVR4nO2d63aiMBRG5SRHgwG1KFq1Krb1/V9xQMutg4FCZ1qTb/9q0cUye52EXE7CaAQAAAAAAAAAAAAAAAAAAAAAAACAXw9xhy9xly/ZCL9O24tOLytH/XAsgraicxjv6b/8ml8HLfS4rej0FL84Gj0j9vTWXHb247WjwZO1K/G7ufB0iWeuBk9a+nV8KEvPH5Sf8zQ+Ohs8afFP8eVafGYiCkL/dDr5YZD+fXNEmzh0N3jS8kfxNI0XCqbjyNNCKCWE1vvj7pR1imgVvzkcPNfn9oaC1UUr6VWQUujnObMUE5eDJw2fREVKeQ1IJSPx6nTwjGj7Lpvc5IqSwGE/nHYMTXayEFp1GpjZCIXrxmpVQ1wcbX5orlvlXANo5mIFo10nOyl65Z4fSkRHO54XL13zQ+PudtyLH1rmNUuK+82zKjqL+uSSH/ZzOyqZzTfNcuR5OnvP3YmWmQ+7KBQkxDRp7vvss8HYs8xduRM+9JYLET5nM4JNfmQ2k8jzPHyUM+MLPhSPdDVPC03nxrr1lH20LMxpV7qHdCmjZTMhWjU3zmJKFFZ0OTK3UbbL1/h5Pt97dInLsfr0b5uXtoRPTY1xxF77p3VZwwZ40nUw8RdO6LnT1LQjXFi0aH6Md8GJ2kV97XieA11DDr8yFq2jf/rH/3t42rfpSRufg/WNDy3761EdEl4eHFr0b3uU/ckalMS6L7bOGmYr6Pm6eTDpT/DX3WyAwnG0Pr5ObtkG1J+rEtruonW029oSSTSOpfSkEtmMMR+ScV+SLF0jWzpM7ya1JRNA9J73dLK2g+epq55kqVA0zods7Zl3jwBXVvt0yIP6PT7zLC7+tSJxjNZl+eQbDdRDUdkvkBZkjvG2On8hh+oJqkMS8dOFGw77tRm/YYMKvz5i04+fWcezWoGCoXqqsSigB3qgB3ruAD1GoMcI9BiBHiPQYwR6jPxLPRhUQE9/Pahc0AM90HMP6DECPUagxwj0GIEeI9Bj5NNCDvTUgR4j0GMEeoxAj5HvfnLVUhAs0HOo6RmaoVHbr2LDDrjqJgEZDc7vqe7L3Tx+fs+IxqUPMR+aHVbNGld25PEWu9bS4Bma3zOidXE3O86k4+3+ZkRcmAfr4eDj2Ba1bj0T8jHg0c7TQm+uR/EM1TNK69c+vdt+aU/iN1F42NIt63uonuxu2/xutlAcR/gNeip3s45v0WMv0GOkPsj4GhYsGrcS9NcjrWqOmymPX/kqyoo9Jm1Mejc+wU//9P8B+6JP/EjpQMuTQeFRq9sOrU8C5N2rSj9ZMHvRDaZwtVgsdov6gamLD3bVqzK5XnuxZm9kF/i2o7TeByq2jNYmTP3bLlJXQqdCeTLYTU9+vabHhi1//YAeI9BjBHqMQI8R6DECPUagxwj0GOmk5wQ90NME9BiBHiN39DCa5iv1zLHiTEuqOnNhdeIetdyfXaGnOllvQw5PX2hR1q4y1YvD8oQn4epbSa/QJfcTz8swoWXuRz07HDzZpOpT9goqqcS86oFW1xdTScfffZdCs7fzJvo407C8Ollc1ufk4Lqde2dY2nayJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwnD8yXE+OovPiyQAAAABJRU5ErkJggg=='
    const [image , setImage] = useState(img1);

    const changeImage = () => {
        setImage((prev) => prev === img1 ? img2 : img1 );
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image} />
            <Button title="Cambiar imagen" onPress={changeImage} />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
});

export default TA4Screen;