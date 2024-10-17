import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 여행지는 미국 입니다."
    },
    {
        id: 2,
        message: "미국에 도착하였습니다. 잠시 대기 바랍니다."
    },
    {
        id: 3,
        message: "당신의 미국 입국은 허가 되었습니다."
    }
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() { // 클래스 컴포넌트의 생명주기 componentDidMount
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({  // 업데이트를 하기 위해서 setState 를 사용
                    notifications: notifications,
                });
                console.log(notifications)
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1500); // 1초 마다 정해진 작업을 수행하고 있다.
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                    <Notification 
                        key={notification.id}
                        id={notification.id}
                        message={notification.message} />
                    );
                })}
            </div>
        )
    }
}

export default NotificationList;