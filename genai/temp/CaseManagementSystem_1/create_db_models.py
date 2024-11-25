# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Example(Base):
    """
    Description: Stores information about each example or case in the system.
    """
    __tablename__ = 'example'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)
    created_date = Column(DateTime, default=datetime.datetime.now)
    # Potentially more fields that describe the data at case level



class Attribute(Base):
    """
    Description: Describes each attribute that can belong to an example or case.
    """
    __tablename__ = 'attribute'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)



class ExampleAttribute(Base):
    """
    Description: Association between examples and their attributes with corresponding values.
    """
    __tablename__ = 'example_attribute'

    id = Column(Integer, primary_key=True, autoincrement=True)
    example_id = Column(Integer, ForeignKey('example.id'), nullable=False)
    attribute_id = Column(Integer, ForeignKey('attribute.id'), nullable=False)
    value = Column(String)



class Rule(Base):
    """
    Description: Defines rules used to discriminate between cases.
    """
    __tablename__ = 'rule'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)
    supported_example_id = Column(Integer, ForeignKey('example.id'))
    # Add more fields related to rule logic



class RuleExample(Base):
    """
    Description: Connects rules with examples that they use or support.
    """
    __tablename__ = 'rule_example'

    id = Column(Integer, primary_key=True, autoincrement=True)
    rule_id = Column(Integer, ForeignKey('rule.id'), nullable=False)
    example_id = Column(Integer, ForeignKey('example.id'), nullable=False)
    role = Column(String)  # To specify if it supports or is tested against



class Difference(Base):
    """
    Description: Captures differences between old and new case data.
    """
    __tablename__ = 'difference'

    id = Column(Integer, primary_key=True, autoincrement=True)
    old_value = Column(String)
    new_value = Column(String)
    attribute_id = Column(Integer, ForeignKey('attribute.id'), nullable=False)
    example_id = Column(Integer, ForeignKey('example.id'), nullable=False)



class Prediction(Base):
    """
    Description: Stores results of predictions made using defined rules on examples.
    """
    __tablename__ = 'prediction'

    id = Column(Integer, primary_key=True, autoincrement=True)
    result = Column(String)
    example_id = Column(Integer, ForeignKey('example.id'), nullable=False)
    rule_id = Column(Integer, ForeignKey('rule.id'))



class CaseData(Base):
    """
    Description: Holds specific data associated with each test case.
    """
    __tablename__ = 'case_data'

    id = Column(Integer, primary_key=True, autoincrement=True)
    example_id = Column(Integer, ForeignKey('example.id'), nullable=False)
    attribute_id = Column(Integer, ForeignKey('attribute.id'), nullable=False)
    value = Column(String)



class User(Base):
    """
    Description: Stores information about users who manage examples and rules.
    """
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False)
    password_hash = Column(String, nullable=False)
    email = Column(String)
    created_date = Column(DateTime, default=datetime.datetime.now)



class UserRole(Base):
    """
    Description: Defines roles that a user can have.
    """
    __tablename__ = 'user_role'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)



class UserUserRole(Base):
    """
    Description: Association between users and roles they possess.
    """
    __tablename__ = 'user_user_role'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    user_role_id = Column(Integer, ForeignKey('user_role.id'), nullable=False)



class Log(Base):
    """
    Description: Mantains a log of actions performed in the system.
    """
    __tablename__ = 'log'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    action = Column(String, nullable=False)
    timestamp = Column(DateTime, default=datetime.datetime.now)



# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

# Example Test Data
example1 = Example(name='Example A', description='Case illustrating scenario A')
example2 = Example(name='Example B', description='Case illustrating scenario B')
example3 = Example(name='Example C', description='Case illustrating scenario C')
example4 = Example(name='Example D', description='Case illustrating scenario D')

attribute1 = Attribute(name='Attribute 1', description='First attribute')
attribute2 = Attribute(name='Attribute 2', description='Second attribute')
attribute3 = Attribute(name='Attribute 3', description='Third attribute')
attribute4 = Attribute(name='Attribute 4', description='Fourth attribute')

example_attribute1 = ExampleAttribute(example_id=1, attribute_id=1, value='Value A1')
example_attribute2 = ExampleAttribute(example_id=2, attribute_id=2, value='Value B1')
example_attribute3 = ExampleAttribute(example_id=3, attribute_id=3, value='Value C1')
example_attribute4 = ExampleAttribute(example_id=4, attribute_id=4, value='Value D1')

rule1 = Rule(name='Rule 1', description='Rule description A')
rule2 = Rule(name='Rule 2', description='Rule description B')
rule3 = Rule(name='Rule 3', description='Rule description C')
rule4 = Rule(name='Rule 4', description='Rule description D')

rule_example1 = RuleExample(rule_id=1, example_id=1, role='supports')
rule_example2 = RuleExample(rule_id=2, example_id=2, role='supports')
rule_example3 = RuleExample(rule_id=3, example_id=3, role='supports')
rule_example4 = RuleExample(rule_id=4, example_id=4, role='supports')

user1 = User(username='user1', password_hash='hash1', email='user1@example.com')
user2 = User(username='user2', password_hash='hash2', email='user2@example.com')
user3 = User(username='user3', password_hash='hash3', email='user3@example.com')
user4 = User(username='user4', password_hash='hash4', email='user4@example.com')

user_role1 = UserRole(name='Admin', description='Administrator')
user_role2 = UserRole(name='Analyst', description='Data Analyst')
user_role3 = UserRole(name='Tester', description='Tester')
user_role4 = UserRole(name='Developer', description='Developer')

user_user_role1 = UserUserRole(user_id=1, user_role_id=1)
user_user_role2 = UserUserRole(user_id=2, user_role_id=2)
user_user_role3 = UserUserRole(user_id=3, user_role_id=3)
user_user_role4 = UserUserRole(user_id=4, user_role_id=4)

log1 = Log(user_id=1, action='logged in')
log2 = Log(user_id=2, action='created example')
log3 = Log(user_id=3, action='modified rule')
log4 = Log(user_id=4, action='logged out')

prediction1 = Prediction(result='Success', example_id=1, rule_id=1)
prediction2 = Prediction(result='Failure', example_id=2, rule_id=2)
prediction3 = Prediction(result='Success', example_id=3, rule_id=3)
prediction4 = Prediction(result='Failure', example_id=4, rule_id=4)

difference1 = Difference(old_value='Old A1', new_value='New A1', attribute_id=1, example_id=1)
difference2 = Difference(old_value='Old B1', new_value='New B1', attribute_id=2, example_id=2)
difference3 = Difference(old_value='Old C1', new_value='New C1', attribute_id=3, example_id=3)
difference4 = Difference(old_value='Old D1', new_value='New D1', attribute_id=4, example_id=4)

case_data1 = CaseData(example_id=1, attribute_id=1, value='Data A1')
case_data2 = CaseData(example_id=2, attribute_id=2, value='Data B1')
case_data3 = CaseData(example_id=3, attribute_id=3, value='Data C1')
case_data4 = CaseData(example_id=4, attribute_id=4, value='Data D1')


session.add_all([example1, example2, example3, example4, attribute1, attribute2, attribute3, attribute4, example_attribute1, example_attribute2, example_attribute3, example_attribute4, rule1, rule2, rule3, rule4, rule_example1, rule_example2, rule_example3, rule_example4, user1, user2, user3, user4, user_role1, user_role2, user_role3, user_role4, user_user_role1, user_user_role2, user_user_role3, user_user_role4, log1, log2, log3, log4, prediction1, prediction2, prediction3, prediction4, difference1, difference2, difference3, difference4, case_data1, case_data2, case_data3, case_data4])
session.commit()
