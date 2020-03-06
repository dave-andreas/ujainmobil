import React, {useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native'
import {Icon, Button, Header} from 'react-native-elements'
import {Card,CardItem,Left,Right} from 'native-base'
import {listaction} from '../redux/actions'

import {connect} from 'react-redux'

function Home ({navigation,user,username,listaction,list}) {
    useEffect(()=>{
        listaction()
    },[])
    
    const renderitem =({item})=>{
        return (
            <Card>
                <CardItem cardBody>
                    <Image source={{uri:'https://www.bigstockphoto.com/images/homepage/module-6.jpg'}} style={{height:200,width:207}} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>{item.restaurant.name}</Text>
                    </Left>
                </CardItem>
            </Card>
        )
    }

    return (
        <>
            <Header
                rightComponent={{text:`Hallo, ${username}`, style:{color:'white', fontSize:18,fontWeight:'700'}}}
                leftComponent={{icon:'account-circle', color:'white'}}
                containerStyle={{backgroundColor: 'salmon', justifyContent:'space-around', marginTop:-30}}
                rightContainerStyle={{flex:3}} />
            <View style={{flexDirection:'row', flexWrap:'wrap', padding:10, backgroundColor:'#fffdf9'}}>
                <View style={{marginHorizontal:20, marginVertical:10, alignItems:'center'}}>
                    <Icon name='credit-card' color='#8ac6d1' size={60}/>
                    <Text>Credit</Text>
                </View>
                <View style={{marginHorizontal:20, marginVertical:10, alignItems:'center'}}>
                    <Icon name='ac-unit' color='#8ac6d1' size={60}/>
                    <Text>Variant</Text>
                </View>
                <View style={{marginHorizontal:20, marginVertical:10, alignItems:'center'}}>
                    <Icon name='content-paste' color='#8ac6d1' size={60}/>
                    <Text>Recipe</Text>
                </View>
                <View style={{marginHorizontal:20, marginVertical:10, alignItems:'center'}}>
                    <Icon name='location-on' color='#8ac6d1' size={60}/>
                    <Text>Location</Text>
                </View>
                <View style={{marginHorizontal:20, marginVertical:10, alignItems:'center'}}>
                    <Icon name='shopping-cart' color='#8ac6d1' size={60}/>
                    <Text>Cart</Text>
                </View>
                <View style={{marginHorizontal:20, marginVertical:10, alignItems:'center'}}>
                    <Icon name='local-pizza' color='#8ac6d1' size={60}/>
                    <Text>Pizza</Text>
                </View>
                <View style={{marginHorizontal:20, marginVertical:10, alignItems:'center'}}>
                    <Icon name='donut-small' color='#8ac6d1' size={60}/>
                    <Text>Burger</Text>
                </View>
                <View style={{marginHorizontal:20, marginVertical:10, alignItems:'center'}}>
                    <Icon name='clear-all' color='#8ac6d1' size={60}/>
                    <Text>More</Text>
                </View>
            </View>
            
            <FlatList 
                data={list}
                renderItem={({ item }) => (
                    <Card>
                        <CardItem cardBody>
                            <Image source={{uri:`${item.restaurant.featured_image}`}} style={{height:200,width:207}} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>{item.restaurant.name}</Text>
                            </Left>
                            <Right>
                                <Text>{item.restaurant.user_rating.aggregate_rating}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                )}
                keyExtractor={item => item.restaurant.name}
                numColumns={2}
            />
            {/* <View style={{alignItems:'center',flex:1,backgroundColor:'#fffdf9',paddingTop:180,paddingHorizontal:20}}>
                <Text style={{fontSize:35,fontWeight:'bold',color:'#30475e', marginBottom:50}}>Home</Text>
                <Text>welcome {username}</Text>
            </View> */}
            {/* <View style={{marginHorizontal:10,marginBottom:50}}>
                <Button title='Setting' onPress={()=>navigation.toggleDrawer()} />
            </View> */}

        </>
    )
}

const mapstatetoprops = ({auth,home}) =>{
    return {
        user : auth.user,
        username : auth.username,
        list : home.list
    }
}

export default connect (mapstatetoprops,{listaction}) (Home)