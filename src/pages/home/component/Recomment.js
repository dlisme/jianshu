import React from 'react';
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux';

class Recomment extends React.PureComponent {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>

                            </RecommendItem>
                        )
                    })
                }

            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState,null)(Recomment);