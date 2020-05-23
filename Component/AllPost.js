import React, {useState, useEffect} from 'react';
import {View, FlatList, Image} from 'react-native';
import styles from '../Styles/AllPost_Style';
import Header from './Header';
import Story from './Story';
import SinglePost from './SinglePost';
import Fake_Post from './Fake_Post';
import {useSelector, useDispatch} from 'react-redux';
import {LIKE, DISS_LIKE} from '../Redux/Actions';

const AllPost = ({navigation}) => {
  const data = useSelector(state => state.data.data);
  const [posts, setPosts] = useState([]);
  const Dispach = useDispatch();
  // console.log(data, 'data11111');
  // console.log(posts, 'post11111');

  useEffect(() => {
    setPosts([]);
    setPosts(data);
    // console.log(data, 'data22222');
    // console.log(posts, 'post22222');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const _handleLikes = (like, item) => {
    if (like === true) {
      return Dispach(LIKE(like, item));
    }
    if (like === false) {
      return Dispach(DISS_LIKE(like, item));
    }
  };

  return (
    <View style={styles.main}>
      <Header navigation={navigation} />
      <Story />
      <View style={styles.post}>
        {posts === null || !posts || posts.length === 0 ? (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
            <Image
              style={styles.loading}
              source={require('../assets/images/loading.gif')}
            />
          </View>
        ) : (
          <FlatList
            data={posts}
            renderItem={({item, index}) => (
              <SinglePost
                item={item}
                avatar={item.avatar}
                username={item.username}
                post={item.post}
                like={item.like}
                handleLike={_handleLikes}
              />
            )}
            keyExtractor={item => item.id}
            refreshing={true}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-around'}}
          />
        )}
      </View>
    </View>
  );
};

export default AllPost;
