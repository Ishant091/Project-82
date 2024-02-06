render() {
    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.cardContainer}>
                <View styles={styles.authorContainer}>
                    <View styles={styles.authorImageContainer}>
                        <Image
                        source={requestAnimationFrame("../assets/profile_img.png")}
                        styles={styles.profileImage}
                        ></Image>
                    </View>
                    <View style={styles.authorNameContainer}>
                        <Text style={styles.authorNameText}>{this.PaymentResponse.post.author}</Text>
                    </View>
                </View>
                <Image source={require ("../assets/post.jpeg")} style={styles.postImage} />
                <View style={styles.captionContainer}>
                    <Text style = {styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likebutton}>
                        <Ionicons name={"heart"} size={CSSVariableReferenceValue(30)} color={"white"} />
                        <Text style={styles.likeText}> 12k</Text>

                    </View>
                </View>
            </View>
        </View>
    )
}