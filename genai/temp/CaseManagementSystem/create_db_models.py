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
    """description: Table to store examples or cases entered by users."""
    __tablename__ = 'example'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    date_entered = Column(Date, nullable=False)
    is_predicted = Column(Boolean, default=False)


class Attribute(Base):
    """description: Table to store different attributes associated with examples."""
    __tablename__ = 'attribute'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    type = Column(String, nullable=False)  # e.g., 'String', 'Integer'
    description = Column(Text, nullable=True)


class ExampleAttribute(Base):
    """description: Junction table linking examples and their attributes with the corresponding values."""
    __tablename__ = 'example_attribute'

    id = Column(Integer, primary_key=True, autoincrement=True)
    example_id = Column(Integer, ForeignKey('example.id'), nullable=False)
    attribute_id = Column(Integer, ForeignKey('attribute.id'), nullable=False)
    value = Column(String, nullable=True)


class Rule(Base):
    """description: Table for storing rules that discriminate between different cases."""
    __tablename__ = 'rule'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    example_supported_id = Column(Integer, ForeignKey('example.id'), nullable=False)
    source_case_data_id = Column(Integer, ForeignKey('example.id'), nullable=False)


class Diff(Base):
    """description: Table to store differences between old and new case data in support of rule evaluation."""
    __tablename__ = 'diff'

    id = Column(Integer, primary_key=True, autoincrement=True)
    rule_id = Column(Integer, ForeignKey('rule.id'), nullable=False)
    before_value = Column(String, nullable=True)
    after_value = Column(String, nullable=True)


class Prediction(Base):
    """description: Table to store predicted outcomes using created rules."""
    __tablename__ = 'prediction'

    id = Column(Integer, primary_key=True, autoincrement=True)
    rule_id = Column(Integer, ForeignKey('rule.id'), nullable=False)
    example_id = Column(Integer, ForeignKey('example.id'), nullable=False)
    predicted_value = Column(String, nullable=True)
    prediction_date = Column(Date, nullable=False)


class User(Base):
    """description: Table to store user information who create examples or rules."""
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    created_at = Column(DateTime, default=datetime.utcnow)


class ExampleAuthor(Base):
    """description: Junction table associating users with the examples they have authored."""
    __tablename__ = 'example_author'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    example_id = Column(Integer, ForeignKey('example.id'), nullable=False)


class RuleAuthor(Base):
    """description: Junction table associating users with the rules they have authored."""
    __tablename__ = 'rule_author'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    rule_id = Column(Integer, ForeignKey('rule.id'), nullable=False)


class ExampleComparison(Base):
    """description: Table to store results of comparing new examples against existing rules."""
    __tablename__ = 'example_comparison'

    id = Column(Integer, primary_key=True, autoincrement=True)
    new_example_id = Column(Integer, ForeignKey('example.id'), nullable=False)
    rule_id = Column(Integer, ForeignKey('rule.id'), nullable=False)
    result = Column(String, nullable=True)


class Session(Base):
    """description: Table to store sessions of activity for different users interacting with the system."""
    __tablename__ = 'session'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    start_time = Column(DateTime, default=datetime.utcnow)
    end_time = Column(DateTime, nullable=True)


class Log(Base):
    """description: Table to log actions taken by users in the system."""
    __tablename__ = 'log'

    id = Column(Integer, primary_key=True, autoincrement=True)
    session_id = Column(Integer, ForeignKey('session.id'), nullable=False)
    log_entry = Column(Text, nullable=False)
    log_date = Column(DateTime, default=datetime.utcnow)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import date

# Establish SQLite connection
db_path = "sqlite:///system/genai/temp/create_db_models.sqlite"
# engine = create_engine(db_path)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
session = SessionLocal()

# Add test data
example1 = Example(name="Example One", description="First example description", date_entered=date(2023, 1, 15), is_predicted=False)
example2 = Example(name="Example Two", description="Second example description", date_entered=date(2023, 2, 20), is_predicted=False)
example3 = Example(name="Example Three", description="Third example description", date_entered=date(2023, 3, 25), is_predicted=False)
example4 = Example(name="Example Four", description="Fourth example description", date_entered=date(2023, 4, 30), is_predicted=False)

attribute1 = Attribute(name="Attribute A", type="String", description="This is a string attribute.")
attribute2 = Attribute(name="Attribute B", type="Integer", description="This is an integer attribute.")
attribute3 = Attribute(name="Attribute C", type="Boolean", description="This is a boolean attribute.")
attribute4 = Attribute(name="Attribute D", type="Date", description="This is a date attribute.")

example_attribute1 = ExampleAttribute(example_id=1, attribute_id=1, value="Value A")
example_attribute2 = ExampleAttribute(example_id=2, attribute_id=2, value="42")
example_attribute3 = ExampleAttribute(example_id=3, attribute_id=3, value="True")
example_attribute4 = ExampleAttribute(example_id=4, attribute_id=4, value="2023-04-30")


session.add_all([example1, example2, example3, example4, attribute1, attribute2, attribute3, attribute4, example_attribute1, example_attribute2, example_attribute3, example_attribute4])
session.commit()
