package com.ddaanngnCommerce.controller;

import com.ddaanngnCommerce.domain.Article;
import com.ddaanngnCommerce.domain.Category;
import com.ddaanngnCommerce.domain.Status;
import com.ddaanngnCommerce.dto.ArticleResponseDto;
import com.ddaanngnCommerce.service.ArticleService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ArticleController.class)
class ArticleControllerMockMVCTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ArticleService articleService;

    @DisplayName("게시글 ID를 조회하는 요청에 성공적으로 응답하는 경우")
    @Test
    void getArticleByIdSuccessfully() throws Exception {
        //given
        final Article mockArticle = mock(Article.class);
        when(mockArticle.getId()).thenReturn(1L);
        when(mockArticle.getUserId()).thenReturn("테스트 사용자 아이디");
        when(mockArticle.getRegion()).thenReturn("테스트 지역");
        when(mockArticle.getTitle()).thenReturn("테스트 제목");
        when(mockArticle.getContent()).thenReturn("테스트 내용");
        when(mockArticle.getPrice()).thenReturn(100);
        when(mockArticle.getCategory()).thenReturn(Category.CLOTHING);
        when(mockArticle.getImgURL()).thenReturn("테스트 이미지 경로");
        when(mockArticle.getStatus()).thenReturn(Status.SELLING);
        given(articleService.getArticleById(mockArticle.getId())).willReturn(mockArticle);

        //when&then
        mockMvc.perform(MockMvcRequestBuilders
                .get("/articles/{id}",1L))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id",is(mockArticle.getId().intValue())))
                .andDo(print());
    }

    @DisplayName("모든 게시글을 조회하는 경우")
    @Test
    void getArticlesAll() throws Exception {
        //given

        //when&then
        mockMvc.perform(MockMvcRequestBuilders.get("/articles"))
                .andExpect(status().isOk())
                .andDo(print());
    }

}
