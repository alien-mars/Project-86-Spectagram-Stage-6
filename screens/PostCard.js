import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,Platform,StatusBar,Image,TouchableOpacity} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends Component {
    render(){
        return(
              <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              post: this.props.post
            })
          }
        >
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                            aource={require("../assets/profile_img.png")}
                            style={styles.profileImage}>
                            </Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(20)} color={"white"}/>
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    },
    cardContainer: {
      flex: 1,
      margin : RFValue(20),
      backgroundColor : '#2A2A2A',
      borderRadius : RFValue(20),
    },
    authorContainer:{
  
    },
    authorImageContainer:{
  
    },
    profileImage:{
  
    },
    authorNameContainer:{
      padding : RFValue(15)
    },
    authorNameText:{
      fontSize : RFValue(20),
      color : 'white'
    },
    postImage:{
      resizeMode : 'contain',
      width : "95%",
      alignSelf : 'center',
      height : RFValue(250)
    },
    captionContainer:{
      padding : RFValue(10)
    },
    captionText:{
      fontSize : 13,
      color : 'white',
    },
    actionContainer:{
      justifyContent : 'center',
      alignItems : 'center',
      padding : RFValue(10),
    },
    likeButton:{
      width : RFValue(120),
      height:RFValue(50),
      justifyContent:'center',
      alignItems : 'center',
      flexDirection : 'row',
      backgroundColor : '#eb3948',
      borderRadius : RFValue(25)
    },
    likeText:{
      color : 'white',
      fontSize : RFValue(20),
    }
  });