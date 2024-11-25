# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, Date, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 25, 2024 23:58:19
# Database: sqlite:////tmp/tmp.ozmbCcVI3B-01JDJW3ZVGZQMFJY951QR82AWW/CaseManagementSystem/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Attribute(SAFRSBaseX, Base):
    """
    description: Table to store different attributes associated with examples.
    """
    __tablename__ = 'attribute'
    _s_collection_name = 'Attribute'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    type = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    ExampleAttributeList : Mapped[List["ExampleAttribute"]] = relationship(back_populates="attribute")



class Example(SAFRSBaseX, Base):
    """
    description: Table to store examples or cases entered by users.
    """
    __tablename__ = 'example'
    _s_collection_name = 'Example'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    date_entered = Column(Date, nullable=False)
    is_predicted = Column(Boolean)

    # parent relationships (access parent)

    # child relationships (access children)
    ExampleAttributeList : Mapped[List["ExampleAttribute"]] = relationship(back_populates="example")
    ExampleAuthorList : Mapped[List["ExampleAuthor"]] = relationship(back_populates="example")
    RuleList : Mapped[List["Rule"]] = relationship(foreign_keys='[Rule.example_supported_id]', back_populates="example_supported")
    source_case_dataRuleList : Mapped[List["Rule"]] = relationship(foreign_keys='[Rule.source_case_data_id]', back_populates="source_case_data")
    ExampleComparisonList : Mapped[List["ExampleComparison"]] = relationship(back_populates="new_example")
    PredictionList : Mapped[List["Prediction"]] = relationship(back_populates="example")



class User(SAFRSBaseX, Base):
    """
    description: Table to store user information who create examples or rules.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    created_at = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    ExampleAuthorList : Mapped[List["ExampleAuthor"]] = relationship(back_populates="user")
    SessionList : Mapped[List["Session"]] = relationship(back_populates="user")
    RuleAuthorList : Mapped[List["RuleAuthor"]] = relationship(back_populates="user")



class ExampleAttribute(SAFRSBaseX, Base):
    """
    description: Junction table linking examples and their attributes with the corresponding values.
    """
    __tablename__ = 'example_attribute'
    _s_collection_name = 'ExampleAttribute'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    example_id = Column(ForeignKey('example.id'), nullable=False)
    attribute_id = Column(ForeignKey('attribute.id'), nullable=False)
    value = Column(String)

    # parent relationships (access parent)
    attribute : Mapped["Attribute"] = relationship(back_populates=("ExampleAttributeList"))
    example : Mapped["Example"] = relationship(back_populates=("ExampleAttributeList"))

    # child relationships (access children)



class ExampleAuthor(SAFRSBaseX, Base):
    """
    description: Junction table associating users with the examples they have authored.
    """
    __tablename__ = 'example_author'
    _s_collection_name = 'ExampleAuthor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    example_id = Column(ForeignKey('example.id'), nullable=False)

    # parent relationships (access parent)
    example : Mapped["Example"] = relationship(back_populates=("ExampleAuthorList"))
    user : Mapped["User"] = relationship(back_populates=("ExampleAuthorList"))

    # child relationships (access children)



class Rule(SAFRSBaseX, Base):
    """
    description: Table for storing rules that discriminate between different cases.
    """
    __tablename__ = 'rule'
    _s_collection_name = 'Rule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    example_supported_id = Column(ForeignKey('example.id'), nullable=False)
    source_case_data_id = Column(ForeignKey('example.id'), nullable=False)

    # parent relationships (access parent)
    example_supported : Mapped["Example"] = relationship(foreign_keys='[Rule.example_supported_id]', back_populates=("RuleList"))
    source_case_data : Mapped["Example"] = relationship(foreign_keys='[Rule.source_case_data_id]', back_populates=("source_case_dataRuleList"))

    # child relationships (access children)
    DiffList : Mapped[List["Diff"]] = relationship(back_populates="rule")
    ExampleComparisonList : Mapped[List["ExampleComparison"]] = relationship(back_populates="rule")
    PredictionList : Mapped[List["Prediction"]] = relationship(back_populates="rule")
    RuleAuthorList : Mapped[List["RuleAuthor"]] = relationship(back_populates="rule")



class Session(SAFRSBaseX, Base):
    __tablename__ = 'session'
    _s_collection_name = 'Session'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    start_time = Column(DateTime)
    end_time = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("SessionList"))

    # child relationships (access children)
    LogList : Mapped[List["Log"]] = relationship(back_populates="session")



class Diff(SAFRSBaseX, Base):
    """
    description: Table to store differences between old and new case data in support of rule evaluation.
    """
    __tablename__ = 'diff'
    _s_collection_name = 'Diff'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    rule_id = Column(ForeignKey('rule.id'), nullable=False)
    before_value = Column(String)
    after_value = Column(String)

    # parent relationships (access parent)
    rule : Mapped["Rule"] = relationship(back_populates=("DiffList"))

    # child relationships (access children)



class ExampleComparison(SAFRSBaseX, Base):
    """
    description: Table to store results of comparing new examples against existing rules.
    """
    __tablename__ = 'example_comparison'
    _s_collection_name = 'ExampleComparison'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    new_example_id = Column(ForeignKey('example.id'), nullable=False)
    rule_id = Column(ForeignKey('rule.id'), nullable=False)
    result = Column(String)

    # parent relationships (access parent)
    new_example : Mapped["Example"] = relationship(back_populates=("ExampleComparisonList"))
    rule : Mapped["Rule"] = relationship(back_populates=("ExampleComparisonList"))

    # child relationships (access children)



class Log(SAFRSBaseX, Base):
    """
    description: Table to log actions taken by users in the system.
    """
    __tablename__ = 'log'
    _s_collection_name = 'Log'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    session_id = Column(ForeignKey('session.id'), nullable=False)
    log_entry = Column(Text, nullable=False)
    log_date = Column(DateTime)

    # parent relationships (access parent)
    session : Mapped["Session"] = relationship(back_populates=("LogList"))

    # child relationships (access children)



class Prediction(SAFRSBaseX, Base):
    """
    description: Table to store predicted outcomes using created rules.
    """
    __tablename__ = 'prediction'
    _s_collection_name = 'Prediction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    rule_id = Column(ForeignKey('rule.id'), nullable=False)
    example_id = Column(ForeignKey('example.id'), nullable=False)
    predicted_value = Column(String)
    prediction_date = Column(Date, nullable=False)

    # parent relationships (access parent)
    example : Mapped["Example"] = relationship(back_populates=("PredictionList"))
    rule : Mapped["Rule"] = relationship(back_populates=("PredictionList"))

    # child relationships (access children)



class RuleAuthor(SAFRSBaseX, Base):
    """
    description: Junction table associating users with the rules they have authored.
    """
    __tablename__ = 'rule_author'
    _s_collection_name = 'RuleAuthor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    rule_id = Column(ForeignKey('rule.id'), nullable=False)

    # parent relationships (access parent)
    rule : Mapped["Rule"] = relationship(back_populates=("RuleAuthorList"))
    user : Mapped["User"] = relationship(back_populates=("RuleAuthorList"))

    # child relationships (access children)
