import React from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'

class Topic extends React.PureComponent {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {list.map((item) => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img 
                            src={item.get('imgUrl')}
                            className="topic-pic"
                            alt=''
                            />
                            {item.get('title')}
                        </TopicItem>  
                    )
                })}
            </TopicWrapper>
        )
    }
}
 
const mapState = (state) => ({
//    list:  state.get('home').get('topicList')
   list:  state.getIn(['home', 'topicList'])
});


export default connect(mapState, null)(Topic);