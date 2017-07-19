import React from 'react';
const SMALL_THRESHOLD = 750;

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            screenWidth : $(window).width() <= SMALL_THRESHOLD ? "SMALL" : "LARGE"
        }
    }
    componentDidMount(){
        console.log(this.state.screenWidth);
        let self = this;
        $(window).resize(()=>{
            console.log(self.state.screenWidth, $(window).width());
            if($(window).width() <= SMALL_THRESHOLD){
                self.setState({
                    screenWidth : "SMALL"
                });
            } else {
                self.setState({
                    screenWidth : "LARGE"
                });
            }
        });
    }

    render(){
        return (
            <div className="ui container">
                <h1 className="unique">Events</h1>
                <h3>Upcoming</h3>
                <div className="ui stackable two column grid">
                    <div className="column">
                        <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=800&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=rsamfranklin%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FLos_Angeles"
                                id="calendar" width="400" height="400" frameBorder="0" scrolling="no"
                        />
                    </div>
                    <div className="column">
                        <div className="ui blue segment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, laudantium officia. Beatae corporis ipsam officia qui rem. Cupiditate ex fuga id incidunt libero, non reprehenderit. Eum incidunt laborum omnis recusandae?
                            </p>
                        </div>
                    </div>
                </div>
                <h3>Past</h3>
                <div className="ui two column grid">
                    <div className="column">
                        <div className="ui segment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus eum fugit necessitatibus nemo nulla omnis perspiciatis possimus quae quia, sunt ullam. Asperiores dolorum fugit ipsam, labore nostrum possimus voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias beatae, dignissimos distinctio est fuga, ipsum natus nihil odio quae quam quod ratione rerum saepe suscipit vel velit voluptate voluptates.
                            </p>
                        </div>
                        <div className="ui segment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus eum fugit necessitatibus nemo nulla omnis perspiciatis possimus quae quia, sunt ullam. Asperiores dolorum fugit ipsam, labore nostrum possimus voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias beatae, dignissimos distinctio est fuga, ipsum natus nihil odio quae quam quod ratione rerum saepe suscipit vel velit voluptate voluptates.
                            </p>
                        </div>
                        <div className="ui segment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus eum fugit necessitatibus nemo nulla omnis perspiciatis possimus quae quia, sunt ullam. Asperiores dolorum fugit ipsam, labore nostrum possimus voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias beatae, dignissimos distinctio est fuga, ipsum natus nihil odio quae quam quod ratione rerum saepe suscipit vel velit voluptate voluptates.
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem corporis delectus eligendi fugiat ipsa libero maxime minus praesentium quas? Cumque enim excepturi facilis fugiat illum, in libero necessitatibus voluptatibus!
                            </p>
                        </div>
                        <div className="ui segment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus eum fugit necessitatibus nemo nulla omnis perspiciatis possimus quae quia, sunt ullam. Asperiores dolorum fugit ipsam, labore nostrum possimus voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias beatae, dignissimos distinctio est fuga, ipsum natus nihil odio quae quam quod ratione rerum saepe suscipit vel velit voluptate voluptates.
                            </p>
                        </div>
                        <div className="ui segment">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus eum fugit necessitatibus nemo nulla omnis perspiciatis possimus quae quia, sunt ullam. Asperiores dolorum fugit ipsam, labore nostrum possimus voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias beatae, dignissimos distinctio est fuga, ipsum natus nihil odio quae quam quod ratione rerum saepe suscipit vel velit voluptate voluptates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

module.exports = Index;