return ( 
<View style={styles.container)> 
<SafeAreaView style={styles.droid SafeArea} 
<View style=[styles.appTitle}> <View style={styles.appIcon)> 
<Image source=(require("../assets/logo.png")} style={styles.iconImage) >
</Image> 
</View> 
<View style={styles.appTitleTextContainer}> 
<Text style=[styles.appTitleText)>Spectagram</Text> </View> </View> <View style=[styles.cardContainer)> 
<FlatList keyExtractor=(this.keyExtractor) data={posts) renderItem={this.renderItem) /> 
</View> 
</View>