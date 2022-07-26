package com.ssafy.db.entity.depart;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.ssafy.db.entity.user.User;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class UserCommentMention {
	
	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="post_id")
	private Post post;
}