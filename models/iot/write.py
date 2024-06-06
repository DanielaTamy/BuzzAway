from models.db import db
from models.iot.actuator import Actuator
from datetime import datetime
from models.iot.devices import Device

class Write(db.Model):
    _tablename_ = 'write'
    id= db.Column('id', db.Integer, nullable = False, primary_key=True)
    write_datetime = db.Column(db.DateTime(), nullable = False)
    actuator_id= db.Column(db.Integer, db.ForeignKey(Actuator.id), nullable = False)
    value = db.Column( db.Float, nullable = True)

    def save_write(topic, value):
        actuator = Actuator.query.filter(Actuator.topic == topic).first()
        device = Device.query.filter(Device.id == actuator.devices_id).first()

        if (actuator is not None) and (device.is_active==True):
            print(topic, value)
            print(actuator)
            print(device)
            write = Write( write_datetime = datetime.now(), actuator_id = actuator.id, value = float(value) )
            db.session.add(write)
            db.session.commit()

    def get_write(device_id, start, end):
        actuator = Actuator.query.filter(Actuator.devices_id == device_id).first()
        write = Write.query.filter(Write.actuator_id == actuator.id,
        Write.write_datetime > start,
        Write.write_datetime<end).all()
        return write