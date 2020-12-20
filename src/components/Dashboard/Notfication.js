import React, { useEffect } from "react";
import moment from "moment";
import { fetchNotificationsStart } from "../../store/Actions/notfications";
import { useDispatch, useSelector } from "react-redux";

function Notfication() {
  const notifications = useSelector(
    (state) => state.notification.notifications
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotificationsStart());
  }, [dispatch]);
  return (
    <>
      <div className="section">
        <div className="card teal lighten-4">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="notifications">
              {notifications &&
                notifications.map((notify) => {
                  const { content, id, user, time } = notify;
                  return (
                    <li key={id}>
                      <span className="red-text">{user}</span>{" "}
                      <span>{content}</span>
                      <div>
                        <span className="grey-text note-date">
                          {moment(time.toDate()).fromNow()}
                        </span>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notfication;
