package com.ddaanngnCommerce.dto;

import com.ddaanngnCommerce.domain.Article;
import com.ddaanngnCommerce.domain.Category;
import lombok.Getter;

@Getter
public class ArticleResponseDto {
    private Long id;
    private String title;
    private String content;
    private String userId;
    private int price;
    private String region;
    private Category category;
    private String imgURL;

    public ArticleResponseDto (Article article) {
        this.id = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
        this.userId = article.getUserId();
        this.price = article.getPrice();
        this.region = article.getRegion();
        this.category = article.getCategory();
        this.imgURL = article.getImgURL();
    }
}
